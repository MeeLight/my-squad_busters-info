// Styles
import Link from '@core/components/Link'
import styles from './index.module.css'

// Types and interfaces
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

interface IProps {
  customClassName?: string
  children: string | ReactNode
}

type Props = IProps & ComponentPropsWithoutRef<typeof Link>

export default function NavBrand({
  children,
  customClassName = '',
  ...rest
}: Props) {
  return (
    <Link className={`${styles.navBrand} ${customClassName}`.trim()} {...rest}>
      {children}
    </Link>
  )
}
