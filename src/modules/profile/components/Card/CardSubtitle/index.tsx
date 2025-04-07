// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface IProps {
  subtitle: string | ReactNode
  customClassName?: string
  isDefaultComponent?: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'small'>

export default function CardSubtitle({
  subtitle,
  customClassName = '',
  isDefaultComponent = true,
  ...rest
}: Props) {
  if (isDefaultComponent) {
    return (
      <small className={`${styles.cardSubtitle} ${customClassName}`} {...rest}>
        {subtitle}
      </small>
    )
  }

  return subtitle as ReactNode
}
