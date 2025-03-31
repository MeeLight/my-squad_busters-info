import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/404'

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
