// Types and interfaces
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

// Styles
import styles from './index.module.css'

interface IProps {
  children: ReactNode
}

type Props = ComponentPropsWithoutRef<'button'> & IProps

export default function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}
