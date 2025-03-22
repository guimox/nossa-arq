import Image from 'next/image';
import img from '../../public/glass.jpg';

export default function page() {
  return (
    <>
      <Image src={img} alt="image" quality={80} className="h-full w-full" />
    </>
  );
}
