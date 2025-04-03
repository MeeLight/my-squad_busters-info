import { useEffect, useState } from 'react'

// Hooks
import useQueryParam from '@core/hooks/useQueryParam'

// Components
import Link from '@core/components/Link'
//import Spinner from '@core/components/Spinner'

// Tpyes and interfaces
import { IProfileJsonResponse } from '@profile/interfaces'
import { getProfileService } from '@profile/services/getProfile'

export default function ProfilePage() {
  const { queryParam: profileId } = useQueryParam({
    name: 'id',
    regexPattern: /^\d{2}-\d{7}$/,
    errorPagePath: '/profile/404'
  })

  const [profileData, setProfileData] = useState<IProfileJsonResponse | null>(
    null
  )

  useEffect(() => {
    const data = getProfileService(profileId as string)
    setProfileData(data as any)
  }, [])

  return (
    <>
      <h1>My Profile - {profileId}</h1>
      <Link to='/'>Ir a inicio</Link>

      <br />
      <br />
      <br />

      <code>{JSON.stringify(profileData)}</code>
    </>
  )
}
