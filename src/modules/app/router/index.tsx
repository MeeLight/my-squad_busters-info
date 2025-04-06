import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ***** Pages
// Root
import HomePage from '@app/pages/HomePage/index'
import AboutPage from '@app/pages/About/index'
import NotFoundPage from '@app/pages/404/index'

// Profile
import ProfilePage from '@profile/pages/Profile/index'
import NotFoundProfilePage from '@profile/pages/404/index'

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/404' element={<NotFoundProfilePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
