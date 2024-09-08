import { type MotionProps, motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string
}> &
  MotionProps

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <motion.section className={`${className}`} {...props}>
      <div className="mx-auto h-full max-w-[1440px] max-lg:px-[20px] max-2xl:px-[100px]">
        {children}
      </div>
    </motion.section>
  )
}
