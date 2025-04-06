// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Components
import ErrorMessageContainer from '@profile/components/ErrorMessageContainer'

export default function NotFoundProfilePage() {
  return (
    <CenterLayout style={{ height: '100vh' }}>
      <ErrorMessageContainer errorMessage='Page not found' />
    </CenterLayout>
  )
}
