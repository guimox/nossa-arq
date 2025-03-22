'use client';
import Main from '@/components/typography/main';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the slide type with the blur data property
type Slide = {
  titles: string[];
  link: string;
  image: string;
  colors: string[];
  blurDataURL?: string;
};

// Component props type
type HomePageProps = {
  initialSlides: Slide[];
};

const titleVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -11 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HomePage({ initialSlides }: HomePageProps) {
  const [slides] = useState<Slide[]>(initialSlides);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="mx-auto h-screen w-screen overflow-hidden bg-black">
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            {slides.map(
              (slide, index) =>
                index === activeIndex && (
                  <motion.div
                    key={`image-${index}`}
                    className="absolute inset-0"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      opacity: { duration: 1.5, ease: 'easeInOut' },
                    }}
                  >
                    <Image
                      src={slide.image}
                      fill
                      placeholder="blur"
                      blurDataURL={slide.blurDataURL}
                      className="w-full object-cover brightness-40"
                      alt="Architecture project"
                      priority={index === 0}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={`content-${activeIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 mx-auto flex max-w-[1700px] flex-col items-start justify-center gap-4 py-2 md:gap-8">
              <div className="flex flex-col overflow-hidden">
                {slides[activeIndex].titles.map((title, index) => (
                  <motion.div
                    key={index}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                  >
                    <Main className="text-white">{title}</Main>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-2">
                {slides[activeIndex].colors.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: '3rem' }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 50,
                    }}
                    className={`h-[3rem] w-[3rem] ${color}`}
                  />
                ))}
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ delay: 0.8 }}
                className="text-white underline underline-offset-8 hover:cursor-pointer hover:opacity-50"
              >
                Ver projeto
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute right-0 bottom-0 left-0 z-20 mx-auto flex w-full max-w-[1700px] items-center justify-between py-8 font-medium text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="border-b border-l p-6"
        >
          Autoral, brasileira e contemporânea — projetos que traduzem identidade,
          <br />
          pertencimento e beleza em cada detalhe.
        </motion.div>
        <div className="z-40 flex gap-4">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onClick={() => handleDotClick(index)}
              className={`z-40 h-4 w-4 cursor-pointer bg-white hover:opacity-50`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0.2,
                scale: index === activeIndex ? 1.2 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
