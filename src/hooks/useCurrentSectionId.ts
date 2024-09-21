import { useEffect, useState } from 'react'

type UseCurrentSectionIdProps = {
  sectionIds: string[]
}

export default function useCurrentSectionId({
  sectionIds,
}: UseCurrentSectionIdProps) {
  const [currentSection, setCurrentSection] = useState<string>('about')

  useEffect(() => {
    // create an observer instance
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.7 },
    )

    // get all section ids
    // const sectionIds = LINKS.map((item) => item.section)

    // observe each section
    sectionIds.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        sectionObserver.observe(element)
      }
    })

    // clean observers on unmount
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          sectionObserver.unobserve(element)
        }
      })
    }
  }, [sectionIds])

  return { currentSection }
}
