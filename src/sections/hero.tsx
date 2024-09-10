import Section from '../components/section'

export default function Hero() {
  return (
    <Section className="hero-bg h-lvh" id="hero">
      <img
        src="/images/hero-img.png"
        alt="hero-img"
        className="absolute top-0 right-0 h-[90%] max-xl:hidden"
      />
      <div className="flex h-full flex-col items-start justify-center">
        <div className="mt-12 flex w-1/2 gap-7 text-on-white max-sm:flex-col max-lg:w-full max-lg:gap-7 lg:flex-col">
          <div>
            <h3 className="text-5xl lg:text-6xl">Inspire-se,</h3>
            <h2 className="text-7xl lg:text-8xl">aprenda,</h2>
            <h1 className="text-8xl text-on-yellow lg:text-9xl">evolua.</h1>
          </div>

          <div className="h-1 w-full bg-on-white max-sm:h-1 max-sm:w-full max-lg:h-full max-lg:w-3" />

          <p className=" text-lg">
            Descubra a magia da música com a Escola de Música On! Sob a direção
            do talentoso Bertrand Leal, oferecemos uma experiência de
            aprendizado única e personalizada. Quer você seja um iniciante ou um
            músico avançado, nossos cursos e serviços são projetados para levar
            suas habilidades ao próximo nível. Junte-se a nós e transforme sua
            paixão pela música em maestria!
          </p>
        </div>
      </div>
    </Section>
  )
}
