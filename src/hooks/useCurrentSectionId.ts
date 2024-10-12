import { useEffect, useState } from 'react'

type UseCurrentSectionIdProps = {
  sectionIds: string[]
}

export default function useCurrentSectionId({
  sectionIds,
}: UseCurrentSectionIdProps) {
  const [currentSection, setCurrentSection] = useState<string>('hero')

  useEffect(() => {
    // Set threshold based on viewport width
    let thresholdValue = 0.7
    const viewportWidth = window.innerWidth

    if (viewportWidth < 768) {
      // Mobile threshold
      thresholdValue = 0.5
    } else if (viewportWidth >= 768 && viewportWidth < 1024) {
      // Tablet threshold
      thresholdValue = 0.6
    } else {
      // Desktop threshold
      thresholdValue = 0.7
    }

    // create an observer instance
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: thresholdValue },
    )

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
