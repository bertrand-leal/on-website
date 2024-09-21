import cn from '@src/utils/cn'
import type { SVGProps } from 'react'

export type ShapeDividerProps = {
  className?: string
  vectorClassName?: string
} & SVGProps<SVGSVGElement>

export default function ShapeDivider({
  className,
  vectorClassName,
  width = 1440,
  height = 50,
  ...props
}: ShapeDividerProps) {
  return (
    <div
      className={cn('absolute w-full overflow-hidden', className)}
      style={{ lineHeight: 0 }}
    >
      <svg
        {...props}
        // className={className}
        className={cn('w-full max-sm:h-5 max-lg:h-7', vectorClassName)}
        data-name="Layer 1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="#f5f5f5"
        />
      </svg>
    </div>
  )
}
