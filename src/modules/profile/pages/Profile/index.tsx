//import { useEffect } from 'react'

// Hooks
import useQueryParam from '@core/hooks/useQueryParam'

// Components
import Link from '@core/components/Link'
//import Spinner from '@core/components/Spinner'

export default function ProfilePage() {
  const { queryParam: profileId } = useQueryParam({
    name: 'id',
    regexPattern: /^\d{2}-\d{7}$/,
    errorPagePath: '/profile/404'
  })

  return (
    <>
      <h1>My Profile - {profileId}</h1>
      <Link to='/'>Ir a inicio</Link>
    </>
  )
}
