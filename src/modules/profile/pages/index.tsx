//import { useEffect } from 'react'

// Hooks
import useQueryParam from '@core/hooks/useQueryParam'

// Components
import Link from '@core/components/Link'
//import Spinner from '@core/components/Spinner'

export default function ProfilePage() {
  const { queryParam: profileId } = useQueryParam({
    queryParamName: 'search',
    regex: /^\d{2}-\d{7}$/
  })

  return (
    <>
      <Link to='/'>Ir a inicio</Link>
      <h1>My Profile - {profileId}</h1>
    </>
  )
}
