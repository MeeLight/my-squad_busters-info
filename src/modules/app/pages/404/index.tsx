import Link from '@core/components/Link'

// Styles
import styles from './index.module.css'

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundContainer}>
      <h1>404: No such page!</h1>

      <Link to='/'>Go to home</Link>
    </main>
  )
}
