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

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
    <Section className="fixed w-full bg-black bg-opacity-20 backdrop-blur text-on-white">
      <nav
        className={cn('transition-all duration-500 h-24 max-lg:h-20', {})}
        style={isMobileNavOpen ? { height: `${screenHeight}px` } : {}}
      >
        <div className="flex flex-row h-24 max-lg:h-20 items-center justify-start gap-24 py-4 max-sm:justify-between max-lg:py-2">
          <img src="on-logo.png" alt="on-logo" className="h-full" />
          <ul className="flex flex-row justify-center gap-10 max-sm:hidden">
            {LINKS.map((item) => {
              const isActive = currentSection === item.section
              return (
                <li
                  key={item.name}
                  className={cn('text-2xl mb-1', {
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
                      className="h-1 bg-on-yellow"
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
          <ul className="flex flex-col w-full h-full justify-center items-center gap-4 -mt-20">
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
                      className="h-1 bg-on-yellow"
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
