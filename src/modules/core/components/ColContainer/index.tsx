// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
}

type Props = IProps & ComponentPropsWithoutRef<'section'>

export default function ColContainer({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <section className={`${styles.colContainer} ${customClassName}`} {...rest}>
      {children}
    </section>
  )
}
