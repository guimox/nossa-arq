'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '@/components/typography/title';
import Image from 'next/image';

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
    image: '/building.jpg',
    colors: ['bg-red-500', 'bg-yellow-500', 'bg-orange-500'],
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: -10 },
};

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="mx-auto h-screen w-screen overflow-hidden bg-black">
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <Image
                src={slides[activeIndex].image}
                fill
                className="w-full object-cover brightness-40"
                alt="Architecture project"
                priority={activeIndex === 0}
              />
            </div>
            <div className="absolute inset-0 mx-auto flex max-w-[1700px] flex-col items-start justify-center gap-4 px-6 py-2 md:gap-8">
              <div className="flex flex-col gap-2 overflow-hidden">
                {slides[activeIndex].titles.map((title, index) => (
                  <motion.div
                    key={index}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    <Title className="text-white">{title}</Title>
                  </motion.div>
                ))}
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white underline underline-offset-4 hover:cursor-pointer"
              >
                Ver projeto
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-20 mx-auto flex flex-col gap-4 p-8">
          {slides[activeIndex].colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: '3rem' }}
              transition={{
                delay: 0.5 + index * 0.1,
                type: 'spring',
                stiffness: 50,
              }}
              className={`h-10 ${color}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 z-20 mx-auto flex w-full max-w-[1700px] items-end justify-between px-6 py-8 font-medium text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Autoral, brasileira e contemporânea — projetos que traduzem identidade,
          <br />
          pertencimento e beleza em cada detalhe.
        </motion.div>
        <div className="z-40 flex gap-4">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`z-40 -mt-20 h-4 w-4 rounded-full bg-white`}
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
