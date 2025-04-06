// Hooks
import { useEffect, useState } from 'react'
import useQueryParam from '@core/hooks/useQueryParam'

// Services
import { getProfileService } from '@profile/services/getProfile'

// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Components
import MainContent from '@profile/components/MainContent'
import SpinnerWithText from '@core/components/SpinnerWithText'
import { CustomSpiralBasedOnSB } from '@core/icons/game'
import ErrorMessageContainer from '@profile/components/ErrorMessageContainer'

// Types
import type { TErrorMessageState, TProfileState } from '@profile/types'

// Interfaces
import type { IJsonErrorResponse, IProfileData } from '@profile/interfaces'
import type { IProfileJsonResponse } from '@profile/interfaces'

export default function ProfilePage() {
  // States
  const [data, setData] = useState<TProfileState>(undefined)
  const [errorMessage, setErrorMessage] = useState<TErrorMessageState>(null)
  const [profileData, setProfileData] = useState<IProfileData>()

  // Query Param State
  const { queryParam: profileId } = useQueryParam({
    name: 'id',
    regexPattern: /^\d{2}-\d{7}$/,
    errorPagePath: '/profile/404'
  })

  useEffect(() => {
    getProfileService(profileId as string).then(parsedData => {
      if (parsedData && parsedData.hasOwnProperty('error')) {
        setErrorMessage(parsedData as IJsonErrorResponse)
        return
      }

      setErrorMessage({ error: '' } as IJsonErrorResponse)
      setData(parsedData as IProfileJsonResponse)

      // @ts-ignore
      setProfileData(JSON.parse(parsedData?.jsonStr))

      // @ts-ignore
      console.log(JSON.parse(parsedData?.jsonStr))
    })
  }, [])

  return (
    <>
      {typeof profileData === 'undefined' && errorMessage === null && (
        <CenterLayout style={{ overflow: 'hidden' }}>
          <SpinnerWithText
            defaultTextComponent
            text={'Loading...'}
            spinner={
              <CustomSpiralBasedOnSB
                width='83.638'
                height='84.261'
                isAnimated
              />
            }
          />
        </CenterLayout>
      )}

      {!errorMessage?.error && typeof data !== 'undefined' && data !== null ?
        <>
          <MainContent
            profileName={data.playerName}
            level={`${profileData?.other[0].value}`}
          />
        </>
      : <CenterLayout>
          <ErrorMessageContainer errorMessage={errorMessage?.error} />
        </CenterLayout>
      }
    </>
  )
}
