// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

interface IProps {
  children: string | ReactNode
}

type Props = IProps & ComponentPropsWithoutRef<'ul'>

export default function NavList({ children, ...rest }: Props) {
  return (
    <ul className={styles.navList} role='list' {...rest}>
      {children}
    </ul>
  )
}
