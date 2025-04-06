// Components
import { Outlet } from 'react-router-dom'
import Nav from '@core/components/Nav'

export default function BaseLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
