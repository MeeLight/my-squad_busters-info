// Styles
import styles from './index.module.css'

// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'div'>

export default function BodyLayout({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <div className={`${styles.bodyLayout} ${customClassName}`} {...rest}>
      {children}
    </div>
  )
}
