import { type DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react'
import cn from '@src/utils/cn'
import { useEffect, useState } from 'react'

type SoundwaveBarProps = {
  direction?: 'left' | 'right'
  isPlaying: boolean
}

export default function SoundwaveBar({
  isPlaying,
  direction = 'left',
}: SoundwaveBarProps) {
  const isLeft = direction === 'left'
  const isRight = direction === 'right'

  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

  const dotLottieRefCallback = (dotLottieRef: DotLottie) => {
    setDotLottie(dotLottieRef)
  }

  useEffect(() => {
    if (dotLottie && isPlaying) {
      dotLottie.play()
      return
    }
    dotLottie?.pause()
  }, [isPlaying, dotLottie])

  return (
    <div className="flex-1 relative flex">
      <div className="w-full bg-on-yellow h-1 rounded-full" />
      <DotLottieReact
        className={cn(
          'block absolute w-[160%] z-0 -top-[43px]',
          {
            '-left-[30px]': isRight,
            '-right-[30px]': isLeft,
          },
          isPlaying
            ? 'opacity-100 max-lg:opacity-0 max-sm:opacity-100'
            : 'max-lg:opacity-0 opacity-0 max-sm:opacity-0',
        )}
        src="/animations/soundwave.lottie"
        autoplay={false}
        loop
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </div>
  )
}
