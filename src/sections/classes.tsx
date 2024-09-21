import Section from '@src/components/section'
import Slider from '@src/components/slider'

export default function Classes() {
  return (
    <Section
      className="low-brightness bg-[url('/images/classes-img.png')] bg-center bg-cover bg-no-repeat py-10"
      id="classes"
    >
      <div className="flex h-full w-full flex-col items-end justify-center gap-8 pt-3 lg:pt-10">
        <h4 className="mb-6 text-5xl text-on-yellow lg:text-6xl">
          Aulas particulares
        </h4>
        <p className="max-w-4xl text-right font-light text-on-black text-xl md:text-lg lg:text-2xl">
          Aprenda a tocar teclado, piano, acordeon ou a cantar com aulas
          particulares. Nossos cursos são projetados para atender tanto
          iniciantes quanto músicos avançados.
        </p>
        <Slider />
      </div>
    </Section>
  )
}
