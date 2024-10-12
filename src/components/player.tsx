import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import SoundwaveBar from './soundwaveBar'

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<ReactPlayer | null>(null)


  useEffect(() => {
    if (playerRef.current && isPlaying) {
      // Start the music at 60 seconds
      playerRef.current.seekTo(60, 'seconds')
    }

  }, [isPlaying])

  return (
    <div className="relative w-72 flex flex-col items-center gap-5">
      <img
        alt="cover"
        src="/images/cover-img.png"
        className="rounded-2xl border-4 border-on-yellow"
      />
      <div className='flex flex-row justify-center items-center w-full gap-2'>
        <SoundwaveBar isPlaying={isPlaying} />
        <motion.button
          className='z-10'
          whileTap={{ scale: 0.9 }}
          type="button" onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? (
            <FontAwesomeIcon
              icon={['fas', 'circle-pause']}
              className="text-5xl text-on-yellow"
            />
          ) : (
            <FontAwesomeIcon
              icon={['fas', 'circle-play']}
              className="text-5xl text-on-yellow"
            />
          )}
        </motion.button>
        <SoundwaveBar isPlaying={isPlaying} direction='right' />
      </div>
      <div className="-z-10 absolute">
        <ReactPlayer
          ref={playerRef}
          url={'/audio/production-msc.mp3'}
          playing={isPlaying}
          loop={true}
          volume={0.3}
        />
      </div>
    </div>
  )
}
