// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

// Styles
import styles from './index.module.css'

type Props = ComponentPropsWithoutRef<'input'>

export default function Input({ ...rest }: Props) {
  return <input className={styles.field} {...rest} />
}
