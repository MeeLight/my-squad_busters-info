import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from '@app/pages/HomePage'
import ProfilePage from '@profile/pages/index'
import NotFoundPage from '@app/pages/404'

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
