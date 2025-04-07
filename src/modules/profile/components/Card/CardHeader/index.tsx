// Styles
import styles from './index.module.css'

// Types and interfaces
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface IProps {
  title: string | ReactNode
	customClassName?: string
  isDefaultComponent?: boolean
}

type Props = IProps & ComponentPropsWithoutRef<'h1'>

export default function CardHeader({
  title,
	customClassName = '',
  isDefaultComponent = true,
  ...rest
}: Props) {
  if (isDefaultComponent) {
    return (
      <h1 className={`${styles.title} ${customClassName}`} {...rest}>
        {title}
      </h1>
    )
  }

  return title as ReactNode
}
