// Layouts
import BodyLayout from '@core/layouts/BodyLayout'

// Components
import ColContainer from '@core/components/ColContainer'

// Icons
import { GithubIcon } from '@core/icons/repo'

// Stytes
import styles from './index.module.css'

export default function AboutPage() {
  return (
    <BodyLayout customClassName={styles.layout}>
      <h1>About Page</h1>

      <small className={styles.aboutText}>
        This content is not affiliated with, endorsed, sponsored, or
        specifically approved by Supercell and Supercell is not responsible for
        it. For more information see:{' '}
        <a
          href='https://supercell.com/en/fan-content-policy/'
          target='_blank'
          className={styles.inlineLink}
        >
          <strong className={styles.inline}>
            Supercell's Fan Content Policy
          </strong>
        </a>{' '}
        and also{' '}
        <a
          href='https://supercell.com/en/terms-of-service/'
          target='_blank'
          className={styles.inlineLink}
        >
          <strong className={styles.inline}>Term of Service.</strong>
        </a>
      </small>

      <ColContainer style={{ gap: '1.6rem' }}>
        <section>
          <h3 className={styles.apiDev}>API Developer</h3>

          <a
            href='https://github.com/risporce/'
            className={styles.inlineGhLink}
            target='_blank'
          >
            <GithubIcon />
            <span style={{ margin: '0.2rem 0 0 0' }}>Risporce</span>
          </a>
        </section>

        <section>
          <h3 className={styles.apiDev}>FrontEnd Developer</h3>

          <a
            href='https://github.com/MeeLight/'
            className={styles.inlineGhLink}
            target='_blank'
          >
            <GithubIcon />
            <span style={{ margin: '0.2rem 0 0 0' }}>MeeLight</span>
          </a>
        </section>
      </ColContainer>
    </BodyLayout>
  )
}
