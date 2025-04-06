// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function CenterLayout({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <div className={`${styles.centerLayout} ${customClassName}`} {...rest}>
      {children}
    </div>
  )
}
