import ShapeDivider from '@src/components/shapeDivider'
import cn from '@src/utils/cn'
import { type MotionProps, motion } from 'framer-motion'
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string
  hasTopDivider?: boolean
  hasBottomDivider?: boolean
  topDividerColor?: string
  bottomDividerColor?: string
  backgroundChildren?: ReactNode
}> &
  MotionProps &
  HTMLAttributes<HTMLDivElement>

export default function Section({
  hasTopDivider = false,
  hasBottomDivider = false,
  topDividerColor,
  bottomDividerColor,
  className,
  children,
  backgroundChildren,
  ...props
}: SectionProps) {
  return (
    <motion.section
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {hasTopDivider && (
        <ShapeDivider className="-top-1 left-0 w-full rotate-180" />
      )}
      <div className="mx-auto h-full max-w-[1440px] max-lg:px-[20px] max-2xl:px-[100px]">
        {children}
      </div>
      {backgroundChildren && backgroundChildren}
      {hasBottomDivider && (
        <ShapeDivider
          className="-bottom-1 left-0 w-full"
          vectorFill={bottomDividerColor}
        />
      )}
    </motion.section>
  )
}
