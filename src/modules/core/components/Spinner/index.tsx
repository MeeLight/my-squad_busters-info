// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

// Styles
import styles from './index.module.css'

interface IProps {
  text?: string
}

type Props = ComponentPropsWithoutRef<'div'> & IProps

export default function Spinner({ text = '', ...rest }: Props) {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} {...rest}></div>
      {text !== '' && <span className={styles.spinnerText}>{text}</span>}
    </div>
  )
}
