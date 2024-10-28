import Keyboard from '@src/components/keyboard'
import Section from '@src/components/section'

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-on-black py-10"
      backgroundChildren={
        <div className="flex w-full justify-between pr-4 lg:pr-[100px] max-md:flex-col-reverse max-md:gap-10">
          <div className="left-0 w-[40%] bg-on-white max-md:w-full lg:w-1/2 lg:w-[30%]">
            <Keyboard />
          </div>
          <div className="flex h-full flex-col items-end justify-center gap-8 pt-3 max-sm:w-full lg:w-1/2 lg:pt-10">
            <h4 className="mb-6 text-5xl text-on-yellow lg:text-6xl">
              Contato
            </h4>
            <p className="max-w-4xl text-right font-light text-on-white text-xl md:text-lg lg:text-2xl">
              Entre em contato conosco através dos <b>links</b> para mais
              informações sobre nossas aulas e serviços. Se você deseja
              acompanhar conteúdos teóricos sobre música, visite nosso perfil no{' '}
              <b>Medium</b>. Estamos sempre disponíveis para responder suas
              dúvidas e ajudar no que for necessário.
            </p>
          </div>
        </div>
      }
    />
  )
}
