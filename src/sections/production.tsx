import Button from '@src/components/button'
import Player from '@src/components/player'
import Section from '@src/components/section'
import cn from '@src/utils/cn'

export default function Production() {
  return (
    <Section
      className={cn(
        'low-brightness h-svh bg-center bg-cover bg-no-repeat max-sm:h-full max-sm:py-10',
        "bg-[url('/images/production-img.png')]",
      )}
      hasTopDivider
      hasBottomDivider
      bottomDividerColor="#0E0E0E"
      id="production"
    >
      <div className="flex h-full w-fill flex-row items-center justify-between max-sm:flex-col max-sm:gap-10">
        <div className="flex flex-col items-start justify-center gap-8 pt-3 max-sm:items-center lg:pt-10">
          <h4 className="mb-6 text-5xl text-on-yellow max-sm:leading-normal lg:text-6xl">
            Produção Musical e Trilha Sonora
          </h4>
          <p className="max-w-4xl text-left font-light text-on-white text-xl md:text-lg lg:text-2xl">
            Oferecemos serviços de <b>produção musical</b> e trilha sonora para
            diversas mídias. Seja para filmes, vídeos ou projetos especiais,
            nossa expertise garante qualidade e criatividade em cada trabalho.
          </p>
          <Button
            label="Ouça no SoundCloud"
            variant="secondary"
            href="https://soundcloud.com/bertrand-leal-57463179"
          />
        </div>

        <Player />
      </div>
    </Section>
  )
}
