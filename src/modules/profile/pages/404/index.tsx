// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Components
import ErrorMessageContainer from '@profile/components/ErrorMessageContainer'

export default function NotFoundProfilePage() {
  return (
    <CenterLayout>
      <ErrorMessageContainer errorMessage='Invalid id' />
    </CenterLayout>
  )
}
