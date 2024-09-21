import Button from './button'

export type SlideProps = {
  image: string
  link: string
  title: string
  paragraph: string
}
export default function Slide({ image, paragraph, link, title }: SlideProps) {
  return (
    <div className="flex h-[420px] flex-row items-center gap-10 px-5 max-sm:h-fit max-sm:flex-col max-lg:h-[300px] max-lg:gap-5">
      <img src={image} alt="slide" className="h-full" />
      <div className="flex h-full flex-col justify-around max-sm:items-center max-sm:gap-3">
        <h3 className="font-normal text-5xl text-on-black max-lg:text-4xl">
          {title}
        </h3>
        <p className="font-extralight text-2xl text-on-black max-lg:text-lg">
          {paragraph}
        </p>
        <Button
          label="Saiba mais"
          variant="primary"
          className="w-fit max-lg:text-lg"
          href={link}
        />
      </div>
    </div>
  )
}
