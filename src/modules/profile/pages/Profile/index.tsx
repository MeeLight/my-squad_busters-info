// Fragment (unnecessary XD)
import { Fragment } from 'react'

// Hooks
import { useEffect, useState } from 'react'
import useQueryParam from '@core/hooks/useQueryParam'

// Model
import ProfileModel from '@profile/model'

// Services
import { getProfileService } from '@profile/services/getProfile'

// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Views
import MainContentView from '@profile/views/MainContent'
import ResourcesView from '@profile/views/Resources'

// Components
import ColContainer from '@core/components/ColContainer'
import SpinnerWithText from '@core/components/SpinnerWithText'
import ErrorMessageContainer from '@core/components/ErrorMessageContainer'

// Icons
import { CustomSpiralBasedOnSB } from '@core/icons/game'

// Styles
import styles from './index.module.css'

// Types
import type { TErrorMessageState, TProfileState } from '@profile/types'

// Interfaces
import type { IJsonErrorResponse, IProfileData } from '@profile/interfaces'
import type { IProfileJsonResponse } from '@profile/interfaces'

export default function ProfilePage() {
  const tempValues = {
    other: [
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' }
    ],
    resources: [
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '0' }
    ]
  }

  // States
  const [data, setData] = useState<TProfileState>(undefined)
  const [errorMessage, setErrorMessage] = useState<TErrorMessageState>(null)
  const [profileData, setProfileData] = useState<IProfileData | undefined>()

  // Query Param State
  const { queryParam: profileId } = useQueryParam({
    name: 'id',
    regexPattern: /^\d{2}-\d{7}$/,
    errorPagePath: '/profile/404'
  })

  useEffect(() => {
    getProfileService(profileId as string).then(parsedData => {
      if (data && data.hasOwnProperty('error')) {
        setErrorMessage(parsedData as IJsonErrorResponse)
        return
      }

      setErrorMessage({ error: '' } as IJsonErrorResponse)

      const newParsedData = parsedData as IProfileJsonResponse

      setData(newParsedData)
      setProfileData(ProfileModel.getProfileData(newParsedData))
    })
  }, [])

  // Spinner
  if (typeof data === 'undefined' && errorMessage === null) {
    return (
      <CenterLayout style={{ overflow: 'hidden' }}>
        <SpinnerWithText
          isDefaultTextComponent
          text='Loading...'
          spinner={
            <CustomSpiralBasedOnSB width='83.638' height='84.261' isAnimated />
          }
        />
      </CenterLayout>
    )
  }

  return (
    <Fragment>
      {!errorMessage?.error && typeof data !== 'undefined' && data !== null ?
        <ColContainer customClassName={styles.cardContainer}>
          <MainContentView
            profileName={data.playerName}
            level={ProfileModel.getProfileLevel(profileData!)}
            trophies={ProfileModel.getCurrentTrophies(profileData!)}
          />

          <ResourcesView
            tickets={ProfileModel.getTickets(
              profileData ? profileData : (tempValues as any)
            )}
            starTokens={ProfileModel.getStarTokens(
              profileData ? profileData : (tempValues as any)
            )}
            pinataSticks={ProfileModel.getPinataSticks(
              profileData ? profileData : (tempValues as any)
            )}
            gemsThisSeason={ProfileModel.getGemsOfSeason(profileData!)}
            hammers={ProfileModel.getCurrentHammers(profileData!)}
          />
        </ColContainer>
      : <CenterLayout>
          <ErrorMessageContainer errorMessage={errorMessage?.error} />
        </CenterLayout>
      }
    </Fragment>
  )
}
