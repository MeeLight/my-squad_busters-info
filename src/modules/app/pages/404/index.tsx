// Layouts
import CenterLayout from '@core/layouts/CenterLayout'

// Components
import ErrorMessageContainer from '@core/components/ErrorMessageContainer'

// Styles
import styles from './index.module.css'

export default function NotFoundPage() {
  return (
    <CenterLayout customClassName={styles.notFoundContainer}>
      <ErrorMessageContainer errorMessage='Page not found' />
    </CenterLayout>
  )
}
