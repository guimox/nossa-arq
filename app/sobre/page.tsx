'use client';
import Heading from '@/components/structure/heading';
import Main from '@/components/typography/main';
import Paragraph from '@/components/typography/paragraph';
import Subtitle from '@/components/typography/subtitle';
import Title from '@/components/typography/title';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function SobrePage() {
  const headerRef = useRef(null);
  const paragraphsRef = useRef(null);
  const firstImageRef = useRef(null);
  const orangeSectionRef = useRef(null);
  const secondImageRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isParagraphsInView = useInView(paragraphsRef, { once: true, amount: 0.3 });
  const isFirstImageInView = useInView(firstImageRef, { once: true, amount: 0.3 });
  const isOrangeSectionInView = useInView(orangeSectionRef, {
    once: true,
    amount: 0.3,
  });
  const isSecondImageInView = useInView(secondImageRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const colorBlockVariants = {
    hidden: { height: 0 },
    visible: (i: number) => ({
      height: '3rem',
      transition: {
        delay: 0.1 + i * 0.1,
        type: 'spring',
        stiffness: 50,
      },
    }),
  };

  return (
    <section className="content-grid mt-20 space-y-20 py-20 text-zinc-700">
      <motion.div
        ref={headerRef}
        className="flex flex-col-reverse items-start justify-between gap-5 md:flex-row md:items-center"
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <Heading>
          <Main>Sobre nós</Main>
          <Subtitle className="w-full md:w-3/4">
            Inspirados e motivados a criar as melhores soluções para os seus sonhos
          </Subtitle>
        </Heading>
        <div className="flex items-center gap-4">
          <motion.div
            custom={0}
            variants={colorBlockVariants}
            initial="hidden"
            animate={isHeaderInView ? 'visible' : 'hidden'}
            className="h-[3rem] w-[3rem] bg-red-500"
          />
          <motion.div
            custom={1}
            variants={colorBlockVariants}
            initial="hidden"
            animate={isHeaderInView ? 'visible' : 'hidden'}
            className="h-[3rem] w-[3rem] bg-orange-700"
          />
        </div>
      </motion.div>
      <motion.div
        ref={paragraphsRef}
        className="grid grid-cols-1 items-center gap-20 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate={isParagraphsInView ? 'visible' : 'hidden'}
      >
        {[0, 1, 2].map((index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              cupiditate soluta at ut ea recusandae officiis nisi magni enim facilis
              optio possimus alias tempora iure nemo. Blanditiis adipisci id unde!
              Nisi, ad aut eligendi placeat unde assumenda quia voluptate. Labore
              error cumque harum nemo rem iste quos temporibus, id eius ullam
              repellat possimus recusandae saepe dolore temporibus quaerat. Nulla.
              Quibusdam facere labore fugiat. Hic nihil ut consectetur illum
              similique corporis debitis accusamus! Tempore iusto, eveniet quo est,
              odit facere nesciunt et ipsum, rem vel neque deleniti placeat!
              Laudantium, voluptatum!
            </Paragraph>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={firstImageRef}
        className="full-width bg-zinc-300"
        variants={fadeInUp}
        initial="hidden"
        animate={isFirstImageInView ? 'visible' : 'hidden'}
      >
        <div className="mx-auto flex w-full flex-col items-center gap-5 py-10 lg:flex-row lg:gap-20">
          <Image
            src={'/building.jpg'}
            width={800}
            height={800}
            quality={80}
            alt="image"
            className="h-auto w-full"
          />
          <Paragraph className="w-full lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste modi
            ab! Et doloribus vitae atque error recusandae eligendi pariatur eos.
            Sapiente molestias ut cum magnam temporibus, enim harum sint? Quis minus
            cupiditate commodi illo, alias error aliquid. A reiciendis adipisci, nisi
            veniam, commodi libero repellendus sequi necessitatibus illum expedita
            facere exercitationem quis eveniet? Mollitia perspiciatis autem eos
            ratione ipsa.
          </Paragraph>
        </div>
      </motion.div>

      <motion.div
        ref={orangeSectionRef}
        className="space-y-20 bg-orange-700 p-10 text-white"
        variants={staggerContainer}
        initial="hidden"
        animate={isOrangeSectionInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={fadeInUp} className="max-w-5xl space-y-4 text-justify">
          <Heading>
            <Title>Desenho</Title>
            <Subtitle>Planejar e detalhar ao máximo antes de construir</Subtitle>
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nesciunt ut sunt ullam neque, sequi hic, facilis aperiam porro vel saepe
            reprehenderit tempore optio velit perferendis delectus, quo totam
            voluptatibus! Autem dolorum vero quidem, accusantium voluptatibus harum
            aspernatur incidunt recusandae tenetur! Ipsum necessitatibus ullam
            voluptatem similique eos eligendi officia? Reiciendis a ut tenetur sit.
            Nostrum expedita rerum aliquam blanditiis doloremque! Recusandae dolor
            voluptatibus iste esse hic tempora architecto provident ratione minima
            vero obcaecati dolorem necessitatibus natus consequatur quia, facilis
            doloribus vel inventore aliquam repellendus. Cum minima nostrum ipsa
            soluta pariatur.
          </Paragraph>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="ml-auto max-w-5xl space-y-4 text-end"
        >
          <Heading>
            <Title>Renderização</Title>
            <Subtitle>Possibilidades, creatividade e poder de escolha</Subtitle>
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nesciunt ut sunt ullam neque, sequi hic, facilis aperiam porro vel saepe
            reprehenderit tempore optio velit perferendis delectus, quo totam
            voluptatibus! Autem dolorum vero quidem, accusantium voluptatibus harum
            aspernatur incidunt recusandae tenetur! Ipsum necessitatibus ullam
            voluptatem similique eos eligendi officia? Reiciendis a ut tenetur sit.
            Nostrum expedita rerum aliquam blanditiis doloremque! Recusandae dolor
            voluptatibus iste esse hic tempora architecto provident ratione minima
            vero obcaecati dolorem necessitatibus natus consequatur quia, facilis
            doloribus vel inventore aliquam repellendus. Cum minima nostrum ipsa
            soluta pariatur.
          </Paragraph>
        </motion.div>
      </motion.div>

      <motion.div
        ref={secondImageRef}
        className="full-width bg-zinc-300"
        variants={fadeInUp}
        initial="hidden"
        animate={isSecondImageInView ? 'visible' : 'hidden'}
      >
        <div className="mx-auto flex w-full flex-col items-center gap-5 py-10 lg:flex-row lg:gap-20">
          <Image
            src={'/building.jpg'}
            width={800}
            height={800}
            quality={80}
            alt="image"
            className="h-auto w-full"
          />
          <Paragraph className="w-full lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste modi
            ab! Et doloribus vitae atque error recusandae eligendi pariatur eos.
            Sapiente molestias ut cum magnam temporibus, enim harum sint? Quis minus
            cupiditate commodi illo, alias error aliquid. A reiciendis adipisci, nisi
            veniam, commodi libero repellendus sequi necessitatibus illum expedita
            facere exercitationem quis eveniet? Mollitia perspiciatis autem eos
            ratione ipsa.
          </Paragraph>
        </div>
      </motion.div>
    </section>
  );
}
