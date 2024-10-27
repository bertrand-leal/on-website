import Section from '@src/components/section'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <Section className="bg-on-black pb-4">
      <footer>
        <span className="font-light text-on-white">
          © {year} BERTRAND LEAL - TODOS OS DIREITOS RESERVADOS
        </span>
      </footer>
    </Section>
  )
}
