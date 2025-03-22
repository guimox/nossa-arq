import HomePage from '@/components/structure/home';
import { getSlideBlurData } from '@/lib/hash-image';

const slides = [
  {
    titles: ['Apartamento', 'Fernanda Torres'],
    link: '#',
    image: '/building.jpg',
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
  {
    titles: ['Casa', 'Domingo'],
    link: '#',
    image: '/house.jpg',
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
  {
    titles: ['Edíficio', 'Céu Azul'],
    link: '#',
    image: '/glass.jpg',
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
];

export default async function Page() {
  // Generate blur data for all slides
  const slidesWithBlur = await getSlideBlurData(slides);

  return <HomePage initialSlides={slidesWithBlur} />;
}
