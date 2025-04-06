// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

interface IProps {
  fill?: string
}

type Props = IProps & ComponentPropsWithoutRef<'svg'>

export function MenuNavigationGridIcon({ fill, ...rest }: Props) {
  return (
    <svg
      width='25px'
      height='25px'
      viewBox='0 -0.5 21 21'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      fill={fill ? fill : '#000000'}
      {...rest}
    >
      <g strokeWidth='0'></g>
      <g strokeLinecap='round' strokeLinejoin='round'></g>
      <g>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g
            transform='translate(-99.000000, -200.000000)'
            fill={fill ? fill : '#000000'}
          >
            <g transform='translate(56.000000, 160.000000)'>
              <path d='M60.85,51 L57.7,51 C55.96015,51 54.55,52.343 54.55,54 L54.55,57 C54.55,58.657 55.96015,60 57.7,60 L60.85,60 C62.58985,60 64,58.657 64,57 L64,54 C64,52.343 62.58985,51 60.85,51 M49.3,51 L46.15,51 C44.41015,51 43,52.343 43,54 L43,57 C43,58.657 44.41015,60 46.15,60 L49.3,60 C51.03985,60 52.45,58.657 52.45,57 L52.45,54 C52.45,52.343 51.03985,51 49.3,51 M60.85,40 L57.7,40 C55.96015,40 54.55,41.343 54.55,43 L54.55,46 C54.55,47.657 55.96015,49 57.7,49 L60.85,49 C62.58985,49 64,47.657 64,46 L64,43 C64,41.343 62.58985,40 60.85,40 M52.45,43 L52.45,46 C52.45,47.657 51.03985,49 49.3,49 L46.15,49 C44.41015,49 43,47.657 43,46 L43,43 C43,41.343 44.41015,40 46.15,40 L49.3,40 C51.03985,40 52.45,41.343 52.45,43'></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
