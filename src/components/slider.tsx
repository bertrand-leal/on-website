import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider, { type Settings } from 'react-slick'
import Slide, { type SlideProps } from './slide'

const Slides: SlideProps[] = [
  {
    image: '/images/slide-1.png',
    link: 'https://api.whatsapp.com/send?phone=5562991159812&text=Ol%C3%A1!%20Estava%20dando%20uma%20olhado%20no%20site%20da%20On%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20acordeon.',
    title: 'Aulas de acordeon',
    paragraph:
      'As aulas de acordeon são adequadas para alunos de todos os níveis. Você aprenderá técnicas fundamentais, incluindo o uso dos botões e teclas, controle do fole e coordenação mão direita e esquerda. As aulas abrangem uma variedade de estilos musicais, como música folclórica, tango, jazz e música popular. Descubra a beleza e a complexidade do acordeon em um ambiente de aprendizado estimulante e acolhedor.',
  },
  {
    image: '/images/slide-2.png',
    link: 'https://api.whatsapp.com/send?phone=5562991159812&text=Ol%C3%A1!%20Estava%20dando%20uma%20olhado%20no%20site%20da%20On%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20canto.',
    title: 'Aulas de canto',
    paragraph:
      'As aulas de canto são projetadas para todos os níveis de habilidade, desde iniciantes até cantores avançados. Você aprenderá técnicas vocais essenciais, controle da respiração, projeção de voz e expressão artística. As aulas são personalizadas para atender às suas necessidades individuais, ajudando você a desenvolver seu próprio estilo e confiança ao cantar.',
  },
  {
    image: '/images/slide-3.png',
    link: 'https://api.whatsapp.com/send?phone=5562991159812&text=Ol%C3%A1!%20Estava%20dando%20uma%20olhado%20no%20site%20da%20On%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20piano.',
    title: 'Aulas de piano',
    paragraph:
      'As aulas de piano são adaptadas para o seu nível e objetivos, seja você um iniciante ou um pianista intermediário. Você aprenderá técnicas de postura, leitura de partituras, teoria musical e interpretação de peças clássicas e contemporâneas. O método de ensino incentiva o desenvolvimento da musicalidade e a paixão pelo piano',
  },
]

export default function SimpleSlider() {
  const settings: Settings = {
    dots: true,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000 * 7,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <FontAwesomeIcon
          icon={['fas', 'chevron-right']}
          className="text-4xl text-on-black"
        />
      </div>
    ),
    prevArrow: (
      <div>
        <FontAwesomeIcon
          icon={['fas', 'chevron-left']}
          className="text-4xl text-on-black"
        />
      </div>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="w-full px-5 max-sm:px-0">
      <Slider {...settings}>
        {Slides.map((slide) => (
          <Slide {...slide} key={slide.image} />
        ))}
      </Slider>
    </div>
  )
}
