import cn from '@src/utils/cn'
import { type MotionProps, motion } from 'framer-motion'
import { match } from 'ts-pattern'

type ButtonProps = {
  label: string
  className?: string
  variant: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
} & MotionProps

export default function Button({
  label,
  className,
  variant,
  onClick,
  href,
  ...props
}: ButtonProps) {
  return match(variant)
    .with('primary', () => {
      return (
        <motion.button
          onClick={() => {
            if (href) {
              window.open(href, '_blank')
            }
            onClick?.()
          }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            'rounded-xl border-2 border-on-white px-3 py-2 font-normal text-2xl text-on-white',
            className,
          )}
          {...props}
        >
          {label}
        </motion.button>
      )
    })

    .with('secondary', () => {
      return (
        <motion.button
          onClick={() => {
            if (href) {
              window.open(href, '_blank')
            }
            onClick?.()
          }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            'rounded-xl border-2 border-on-white px-3 py-2 font-normal text-2xl text-on-white',
            'hover:border-on-yellow hover:bg-on-yellow hover:text-on-black',
            className,
          )}
          {...props}
        >
          {label}
        </motion.button>
      )
    })
    .exhaustive()
}
