import { Link as RouterLink } from 'react-router-dom'

// Types and interfaces
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

// Styles
import styles from './index.module.css'

interface IProps {
  children: ReactNode
}

type Props = ComponentPropsWithoutRef<typeof RouterLink> & IProps

export default function Link({ children, ...rest }: Props) {
  return (
    <RouterLink className={styles.link} {...rest}>
      {children}
    </RouterLink>
  )
}
