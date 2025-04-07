// Types and interfaces
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'svg'>

export function XpIcon({ ...rest }: Props) {
  return (
    <svg
      width='70pt'
      height='76pt'
      viewBox='0 0 130 136'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <g>
        <path
          fill='#000000'
          opacity='1.00'
          d=' M 57.82 3.83 C 61.18 -0.45 68.77 -0.41 72.29 3.67 C 76.69 8.05 81.09 12.42 85.43 16.85 C 92.32 16.90 99.21 16.68 106.09 16.95 C 109.96 17.17 113.32 20.08 113.95 23.94 C 114.68 31.16 114.31 38.44 114.37 45.68 C 118.63 50.08 123.04 54.35 127.35 58.71 C 128.83 60.09 129.54 62.02 130.00 63.94 L 130.00 72.43 C 129.53 76.75 125.95 79.31 122.96 81.95 C 120.36 84.99 117.59 87.87 114.43 90.33 C 114.30 97.22 114.57 104.12 114.13 111.00 C 113.83 115.26 110.41 119.43 105.89 119.36 C 99.21 119.71 92.52 119.33 85.83 119.54 C 80.87 123.32 77.36 128.58 72.46 132.44 C 69.63 136.00 64.35 136.30 60.41 134.61 C 54.81 130.00 50.27 124.17 44.70 119.55 C 38.15 119.32 31.59 119.68 25.04 119.41 C 20.71 119.48 16.93 115.78 16.59 111.53 C 15.79 104.70 16.37 97.81 16.08 90.96 C 11.77 85.70 6.33 81.37 1.86 76.22 C 0.79 74.88 0.43 73.15 0.00 71.53 L 0.00 64.85 C 0.56 62.72 1.06 60.39 2.80 58.88 C 7.22 54.46 11.64 50.02 16.09 45.62 C 16.32 38.78 15.82 31.91 16.57 25.10 C 16.75 20.81 20.51 16.60 24.98 16.89 C 31.58 16.75 38.18 16.87 44.78 16.85 C 49.17 12.55 53.50 8.20 57.82 3.83 M 61.97 6.98 C 56.87 11.84 52.18 17.23 46.84 21.78 C 39.50 21.97 32.16 21.71 24.82 21.89 C 22.84 22.21 21.31 24.05 21.41 26.07 C 21.33 33.11 21.47 40.15 21.36 47.18 C 16.72 52.81 10.99 57.61 6.01 62.99 C 4.76 64.12 5.01 65.91 5.04 67.42 L 5.55 67.41 C 10.19 73.39 16.29 78.23 21.38 83.89 C 21.42 90.95 21.36 98.02 21.41 105.09 C 21.22 107.13 22.81 109.47 24.98 109.43 C 32.35 109.59 39.72 109.39 47.10 109.52 C 52.41 114.84 57.75 120.12 63.03 125.47 C 64.45 125.54 65.87 125.57 67.30 125.56 C 72.76 120.28 78.04 114.80 83.48 109.49 C 91.08 109.45 98.69 109.54 106.29 109.44 C 106.78 109.10 107.78 108.40 108.27 108.06 C 108.70 106.76 109.39 105.48 109.23 104.07 C 109.23 97.37 109.18 90.67 109.24 83.97 C 114.15 78.39 119.77 73.39 124.91 67.99 C 124.81 66.28 125.55 64.25 124.34 62.80 C 119.39 57.73 114.25 52.83 109.34 47.71 C 109.01 40.40 109.37 33.05 109.18 25.73 C 108.87 24.80 108.51 23.89 108.13 22.99 C 107.58 22.73 106.49 22.22 105.94 21.96 C 98.42 21.53 90.84 22.18 83.34 21.65 C 78.87 17.47 74.65 13.01 70.28 8.71 C 68.97 7.50 67.82 5.77 65.86 5.64 C 64.45 5.70 62.87 5.70 61.97 6.98 Z'
        />
      </g>
      <g id='#cdf5ffff'>
        <path
          fill='#cdf5ff'
          opacity='1.00'
          d=' M 61.97 6.98 C 62.87 5.70 64.45 5.70 65.86 5.64 C 65.81 10.79 65.77 15.94 65.91 21.09 C 63.16 21.50 61.70 24.07 59.81 25.81 C 57.11 28.37 54.73 31.34 51.72 33.55 C 46.49 33.87 41.23 33.42 36.00 33.70 C 34.69 33.66 33.29 34.72 33.39 36.11 C 33.13 41.40 33.40 46.71 33.29 52.00 C 30.15 55.91 26.29 59.13 22.85 62.74 C 21.62 63.95 22.14 65.85 21.86 67.37 C 16.43 67.29 10.99 67.32 5.55 67.41 L 5.04 67.42 C 5.01 65.91 4.76 64.12 6.01 62.99 C 10.99 57.61 16.72 52.81 21.36 47.18 C 21.47 40.15 21.33 33.11 21.41 26.07 C 21.31 24.05 22.84 22.21 24.82 21.89 C 32.16 21.71 39.50 21.97 46.84 21.78 C 52.18 17.23 56.87 11.84 61.97 6.98 Z'
        />
      </g>
      <g id='#8acfffff'>
        <path
          fill='#8acfff'
          opacity='1.00'
          d=' M 65.86 5.64 C 67.82 5.77 68.97 7.50 70.28 8.71 C 74.65 13.01 78.87 17.47 83.34 21.65 C 90.84 22.18 98.42 21.53 105.94 21.96 C 106.49 22.22 107.58 22.73 108.13 22.99 C 108.51 23.89 108.87 24.80 109.18 25.73 C 109.37 33.05 109.01 40.40 109.34 47.71 C 114.25 52.83 119.39 57.73 124.34 62.80 C 125.55 64.25 124.81 66.28 124.91 67.99 C 119.77 73.39 114.15 78.39 109.24 83.97 C 109.18 90.67 109.23 97.37 109.23 104.07 C 109.39 105.48 108.70 106.76 108.27 108.06 C 107.78 108.40 106.78 109.10 106.29 109.44 C 98.69 109.54 91.08 109.45 83.48 109.49 C 78.04 114.80 72.76 120.28 67.30 125.56 C 65.87 125.57 64.45 125.54 63.03 125.47 C 57.75 120.12 52.41 114.84 47.10 109.52 C 39.72 109.39 32.35 109.59 24.98 109.43 C 22.81 109.47 21.22 107.13 21.41 105.09 C 21.36 98.02 21.42 90.95 21.38 83.89 C 16.29 78.23 10.19 73.39 5.55 67.41 C 10.99 67.32 16.43 67.29 21.86 67.37 C 25.36 71.54 29.71 74.90 33.10 79.15 C 33.82 84.85 32.71 90.66 33.63 96.34 C 33.88 96.58 34.38 97.06 34.63 97.30 C 40.34 98.10 46.19 96.95 51.87 97.84 C 56.07 101.36 59.58 105.60 63.55 109.36 C 64.42 110.28 66.24 109.92 67.06 109.06 C 71.03 105.28 74.48 100.87 78.91 97.61 C 84.24 97.29 89.58 97.81 94.90 97.45 C 96.23 97.52 96.78 96.00 97.15 95.00 C 97.62 89.71 96.97 84.38 97.38 79.08 C 100.28 74.90 104.73 71.98 107.86 67.95 C 108.14 66.38 108.14 64.73 107.78 63.17 C 104.72 59.32 100.66 56.38 97.56 52.56 C 96.75 47.12 97.74 41.54 97.14 36.06 C 96.79 34.71 95.54 33.51 94.07 33.67 C 88.89 33.38 83.67 34.02 78.51 33.45 C 74.05 29.62 70.17 25.15 65.91 21.09 C 65.77 15.94 65.81 10.79 65.86 5.64 Z'
        />
      </g>
      <g id='#419ef3ff'>
        <path
          fill='#419ef3'
          opacity='1.00'
          d=' M 59.81 25.81 C 61.70 24.07 63.16 21.50 65.91 21.09 C 70.17 25.15 74.05 29.62 78.51 33.45 C 83.67 34.02 88.89 33.38 94.07 33.67 C 95.54 33.51 96.79 34.71 97.14 36.06 C 97.74 41.54 96.75 47.12 97.56 52.56 C 100.66 56.38 104.72 59.32 107.78 63.17 C 108.14 64.73 108.14 66.38 107.86 67.95 C 104.73 71.98 100.28 74.90 97.38 79.08 C 96.97 84.38 97.62 89.71 97.15 95.00 C 96.78 96.00 96.23 97.52 94.90 97.45 C 89.58 97.81 84.24 97.29 78.91 97.61 C 74.48 100.87 71.03 105.28 67.06 109.06 C 66.24 109.92 64.42 110.28 63.55 109.36 C 59.58 105.60 56.07 101.36 51.87 97.84 C 46.19 96.95 40.34 98.10 34.63 97.30 C 34.38 97.06 33.88 96.58 33.63 96.34 C 32.71 90.66 33.82 84.85 33.10 79.15 C 29.71 74.90 25.36 71.54 21.86 67.37 C 22.14 65.85 21.62 63.95 22.85 62.74 C 26.29 59.13 30.15 55.91 33.29 52.00 C 33.40 46.71 33.13 41.40 33.39 36.11 C 33.29 34.72 34.69 33.66 36.00 33.70 C 41.23 33.42 46.49 33.87 51.72 33.55 C 54.73 31.34 57.11 28.37 59.81 25.81 Z'
        />
      </g>
    </svg>
  )
}
