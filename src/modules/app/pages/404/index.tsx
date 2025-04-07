import Link from '@core/components/Link'

<<<<<<< HEAD
// Components
import ErrorMessageContainer from '@core/components/ErrorMessageContainer'
=======
// Styles
import styles from './index.module.css'
>>>>>>> 101de2e (Revert "feature: paginas de error, level and username card" (#8))

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundContainer}>
      <h1>404: No such page!</h1>

      <Link to='/'>Go to home</Link>
    </main>
  )
}
