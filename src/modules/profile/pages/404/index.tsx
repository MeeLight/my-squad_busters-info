// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Components
import ErrorMessageContainer from '@core/components/ErrorMessageContainer'

export default function NotFoundProfilePage() {
  return (
    <CenterLayout>
      <ErrorMessageContainer errorMessage='Account not found' />
    </CenterLayout>
  )
}
