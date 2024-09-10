import Section from '@src/components/section'

export default function About() {
  return (
    <Section
      className="bg-on-white max-sm:h-[85svh] md:h-[75svh] lg:h-[80svh] xl:h-[75svh]"
      id="about"
    >
      <div className="flex h-full flex-col md:flex-row">
        <img
          src="/images/about-img.png"
          alt="about-img"
          className="-mt-1 md:h-[70%] xl:h-[80%]"
        />
        <div className="flex h-full w-full flex-col items-end justify-start gap-5 pt-3 lg:gap-40 lg:pt-10">
          <h4 className="text-5xl text-on-yellow lg:text-6xl">
            Sobre a <b>ON</b>
          </h4>
          <p className="text-right font-light text-on-black text-xl md:text-lg lg:text-2xl">
            A Escola de Música On, fundada por Bertrand Leal, oferece cursos e
            serviços de música para todos os níveis. Com mais de{' '}
            <b>10 anos de experiência,</b> Bertrand é músico, produtor, ator de
            teatro e matemático, dedicando-se a transmitir seu conhecimento com
            paixão e excelência.
          </p>
        </div>
      </div>
    </Section>
  )
}
