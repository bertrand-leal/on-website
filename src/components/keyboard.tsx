import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import cn from '@src/utils/cn'
import { useState } from 'react'

type WhiteKeys = {
  key: string
  label: string
  icon?: FontAwesomeIconProps['icon']
  link: string
  blackKey?: string
}

const WHITE_KEYS: WhiteKeys[] = [
  {
    key: 'C',
    label: 'WhatsApp',
    icon: ['fab', 'whatsapp'],
    link: 'wa.me/+5562991159812',
    blackKey: 'C-sharp',
  },
  {
    key: 'D',
    label: 'Hotmart',
    icon: ['fas', 'fire'],
    link: 'https://hotmart.com/pt-br/marketplace/produtos/tecladista-completo/D42268516G',
    blackKey: 'D-sharp',
  },
  {
    key: 'E',
    label: 'Spotify',
    icon: ['fab', 'spotify'],
    link: 'https://open.spotify.com/artist/1YRA3I0ByqkfZMWjV86LXE?si=kCK4cVozRfeVX0PYBhAmKg',
  },
  {
    key: 'F',
    label: 'SoundCloud',
    icon: ['fab', 'soundcloud'],
    link: 'https://soundcloud.com/bertrand-leal-57463179',
    blackKey: 'F-sharp',
  },
  {
    key: 'G',
    label: 'Medium',
    icon: ['fab', 'medium'],
    link: 'https://medium.com/@bertrandempreendigitais',
    blackKey: 'G-sharp',
  },
  {
    key: 'A',
    label: 'Instagram',
    icon: ['fab', 'instagram'],
    link: 'https://www.instagram.com/escolademusicaon/',
    blackKey: 'A-sharp',
  },
  {
    key: 'B',
    label: 'Email',
    icon: ['fas', 'envelope'],
    link: 'mailto:escolaon.bertrand@gmail.com',
  },
  {
    key: 'C-8',
    label: '',
    link: '#',
  },
]

export default function Keyboard() {
  const [currentKey, setCurrentKey] = useState<string>('')
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null,
  )

  const handleKeyDown = (key: string) => {
    console.log('handleKeyDown', key)
    setCurrentKey(key)

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    // Play new sound and set it to loop
    const audio = new Audio(`/audio/notes/${key}.wav`)
    audio.play()

    setCurrentAudio(audio)
  }

  const handleKeyUp = () => {
    setCurrentKey('')
  }

  return (
    <div>
      <ul>
        {WHITE_KEYS.map((key) => {
          return (
            <li
              key={key.key}
              className={cn(
                'relative flex h-14 select-none flex-row items-center justify-end border-y-[0.5px] border-y-on-black pr-8',
                {
                  'bg-on-yellow': currentKey === key.key,
                },
              )}
            >
              <button
                type="button"
                className="h-full w-full"
                onMouseDown={() => handleKeyDown(key.key)}
                onMouseUp={() => handleKeyUp()}
                onTouchStart={() => setCurrentKey(key.key)}
                onTouchEnd={() => setCurrentKey('')}
              />

              <a
                href={key.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-3"
              >
                {key.icon && (
                  <FontAwesomeIcon icon={key.icon} className="h-8" />
                )}

                <span className="font-normal text-2xl">{key.label}</span>
              </a>
              {key.blackKey && (
                <button
                  type="button"
                  onMouseDown={() => handleKeyDown(key.blackKey || '')}
                  onMouseUp={() => handleKeyUp()}
                  onTouchStart={() => setCurrentKey(key.blackKey || '')}
                  onTouchEnd={() => setCurrentKey('')}
                  className={cn(
                    '-bottom-[15px] absolute left-0 z-10 h-[30px] w-[50%] bg-on-black',
                    {
                      'bg-on-yellow': currentKey === key.blackKey,
                    },
                  )}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
