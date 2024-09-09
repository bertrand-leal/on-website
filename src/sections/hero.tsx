import Section from '../components/section'

export default function Hero() {
  return (
    <Section className="hero-bg h-lvh" id="hero">
      <img
        src="hero-img.png"
        alt="hero-img"
        className="absolute top-0 right-0 h-[90%] max-xl:hidden"
      />
      <div className="flex h-full flex-col items-start justify-center">
        <div className="flex mt-12 w-1/2 text-on-white max-lg:gap-7 gap-7 max-sm:flex-col lg:flex-col max-lg:w-full">
          <div>
            <h3 className="lg:text-6xl text-5xl">Inspire-se,</h3>
            <h2 className="lg:text-8xl text-7xl">aprenda,</h2>
            <h1 className="lg:text-9xl text-on-yellow text-8xl">evolua.</h1>
          </div>

          <div className="w-full h-1 bg-on-white max-lg:h-full max-lg:w-3 max-sm:w-full max-sm:h-1" />

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
