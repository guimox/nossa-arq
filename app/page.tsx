import HomePage from '@/components/structure/home';
import firstImage from '../public/building.jpg';
import secondImage from '../public/glass.jpg';
import thirdImage from '../public/house.jpg';

const slides = [
  {
    titles: ['Apartamento', 'Fernanda Torres'],
    link: '#',
    image: firstImage,
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
  {
    titles: ['Casa', 'Domingo'],
    link: '#',
    image: thirdImage,
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
  {
    titles: ['Edíficio', 'Céu Azul'],
    link: '#',
    image: secondImage,
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
];

export default async function Page() {
  // Generate blur data for all slides

  return <HomePage initialSlides={slides} />;
}
