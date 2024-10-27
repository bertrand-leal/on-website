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
    <div className="relative flex flex-1">
      <div className="h-1 w-full rounded-full bg-on-yellow" />
      <DotLottieReact
        className={cn(
          '-top-[43px] absolute z-0 block w-[160%]',
          {
            '-left-[30px]': isRight,
            '-right-[30px]': isLeft,
          },
          isPlaying
            ? 'opacity-100 max-sm:opacity-100 max-lg:opacity-0'
            : 'opacity-0 max-sm:opacity-0 max-lg:opacity-0',
        )}
        src="/animations/soundwave.lottie"
        autoplay={false}
        loop
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </div>
  )
}
