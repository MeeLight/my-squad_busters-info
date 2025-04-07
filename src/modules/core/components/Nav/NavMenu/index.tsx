// Components

// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

interface IProps {
  children: ReactNode
}

type Props = IProps & ComponentPropsWithoutRef<'span'>

export default function NavMenu({ children, ...rest }: Props) {
  return (
    <span className={styles.navMenu} {...rest}>
      {children}
    </span>
  )
}
