// Hooks
import { useEffect, useState } from 'react'
import useQueryParam from '@core/hooks/useQueryParam'

// Services
import { getProfileService } from '@profile/services/getProfile'

// Components
import Link from '@core/components/Link'
import Spinner from '@core/components/Spinner'

// Types
import type { TErrorMessageState, TProfileState } from '@profile/types'

// Interfaces
import type { IJsonErrorResponse } from '@profile/interfaces'
import type { IProfileJsonResponse } from '@profile/interfaces'

export default function ProfilePage() {
  // States
  const [profileData, setProfileData] = useState<TProfileState>(undefined)
  const [errorMessage, setErrorMessage] = useState<TErrorMessageState>(null)

  // Query Param State
  const { queryParam: profileId } = useQueryParam({
    name: 'id',
    regexPattern: /^\d{2}-\d{7}$/,
    errorPagePath: '/profile/404'
  })

  useEffect(() => {
    getProfileService(profileId as string).then(data => {
      if (data && data.hasOwnProperty('error')) {
        setErrorMessage(data as IJsonErrorResponse)
        return
      }

      setProfileData(data as IProfileJsonResponse)
      setErrorMessage({ error: '' } as IJsonErrorResponse)
    })
  }, [])

  return (
    <>
      <h1>My Profile - {profileId}</h1>
      <Link to='/'>Ir a inicio</Link>

      <br />

      {typeof profileData === 'undefined' && errorMessage === null && (
        <Spinner text='Loading...' />
      )}

      {errorMessage?.error ?
        <p style={{ outline: '1px solid black' }}>{errorMessage?.error}</p>
      : <code>{JSON.stringify(profileData)}</code>}
    </>
  )
}
