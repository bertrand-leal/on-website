import type { SVGProps } from 'react'

export type ShapeDividerProps = {
  className?: string
} & SVGProps<SVGSVGElement>

export default function ShapeDivider({
  className,
  width = 1440,
  height = 50,
  ...props
}: ShapeDividerProps) {
  return (
    <div className="absolute w-full overflow-hidden" style={{ lineHeight: 0 }}>
      <svg
        {...props}
        className={className}
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
