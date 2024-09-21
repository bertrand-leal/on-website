import Button from '@src/components/button'
import Section from '@src/components/section'

export default function Course() {
  return (
    <Section
      className="low-brightness h-svh bg-[url('/images/course-img.png')] bg-center bg-cover bg-no-repeat"
      hasTopDivider
      hasBottomDivider
      id="course"
    >
      (
      <div className="flex h-full w-full flex-col items-start justify-center gap-8 pt-3 lg:pt-10">
        <h4 className="mb-6 text-5xl text-on-yellow lg:text-6xl">
          Método Tecladista Completo
        </h4>
        <p className="max-w-4xl text-left font-light text-on-white text-xl md:text-lg lg:text-2xl">
          Descubra o <b>Método Tecladista Completo</b>, um curso abrangente
          disponível na Hotmart, que ensina tudo o que você precisa saber para
          dominar o teclado. Aprenda no seu próprio ritmo com aulas detalhadas e
          práticas.
        </p>
        <Button
          label="Veja no hotmart"
          variant="secondary"
          href="https://hotmart.com/pt-br/marketplace/produtos/tecladista-completo/D42268516G?sck=HOTMART_SITE"
        />
      </div>
      )
    </Section>
  )
}
