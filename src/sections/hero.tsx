import Section from '../components/section'

export default function Hero() {
  return (
    <Section className="hero-bg h-svh" id="hero">
      <img
        src="hero-img.png"
        alt="hero-img"
        className="h-[90%] max-xl:hidden absolute top-0 right-0"
      />
      <div className="h-full flex flex-col items-start justify-center">
        <div className="text-on-white w-1/2 max-xl:w-full">
          <h3 className="text-6xl max-sm:text-5xl">Inspire-se,</h3>
          <h2 className="text-8xl max-sm:text-7xl">aprenda,</h2>
          <h1 className="text-9xl max-sm:text-8xl text-on-yellow">evolua.</h1>
          <div className="bg-on-white mt-24 max-sm:mt-12 w-full h-1" />
          <p className="text-lg mt-8">
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
