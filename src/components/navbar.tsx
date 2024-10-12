import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useCurrentSectionId from '../hooks/useCurrentSectionId'
import cn from '../utils/cn'
import Section from './section'

const LINKS = [
  { name: 'Início', section: 'hero' },
  { name: 'Sobre', section: 'about' },
  { name: 'Curso', section: 'course' },
  { name: 'Aulas', section: 'classes' },
  { name: 'Produção', section: 'production' },
  { name: 'Contato', section: 'contact' },
]

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)

  const { currentSection } = useCurrentSectionId({
    sectionIds: LINKS.map((item) => item.section),
  })

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY
      const offset = sectionPosition - 50
      window.scroll({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  const screenHeight = window.innerHeight

  useEffect(() => {
    const handleResize = () => {
      if (screenHeight > 639) {
        setIsMobileNavOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenHeight])

  return (
    <Section className="fixed z-20 w-full bg-black bg-opacity-50 text-on-white backdrop-blur">
      <nav
        className={cn('h-24 transition-all duration-500 max-lg:h-20', {})}
        style={isMobileNavOpen ? { height: `${screenHeight}px` } : {}}
      >
        <div className="flex h-24 flex-row items-center justify-start gap-24 py-4 max-sm:justify-between max-lg:h-20 max-lg:py-2">
          <img src="/images/on-logo.png" alt="on-logo" className="h-full" />
          <ul className="flex flex-row justify-center gap-10 max-sm:hidden">
            {LINKS.map((item) => {
              const isActive = currentSection === item.section
              return (
                <li
                  key={item.name}
                  className={cn('mb-1 text-2xl', {
                    'text-on-yellow': isActive,
                  })}
                >
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.section)}
                  >
                    {item.name}
                  </button>
                  {isActive && (
                    <motion.div
                      className="h-1 bg-on-yellow bg-opacity-100"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className="text-2xl md:hidden"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </button>
        </div>
        {isMobileNavOpen && (
          <ul className="-mt-20 flex h-full w-full flex-col items-center justify-center gap-4">
            {LINKS.map((item) => {
              const isActive = currentSection === item.section
              return (
                <li
                  key={item.name}
                  className={cn('text-2xl', {
                    'text-on-yellow': isActive,
                  })}
                >
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(item.section)
                      setIsMobileNavOpen(false)
                    }}
                  >
                    {item.name}
                  </button>
                  {isActive && (
                    <motion.div
                      className="h-1 bg-on-yellow bg-opacity-100"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </nav>
    </Section>
  )
}
