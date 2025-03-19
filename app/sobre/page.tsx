'use client';
import Heading from '@/components/structure/heading';
import Main from '@/components/typography/main';
import Paragraph from '@/components/typography/paragraph';
import Subtitle from '@/components/typography/subtitle';
import Title from '@/components/typography/title';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SobrePage() {
  // Animation variants for the initial page load
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="content-grid mt-20 space-y-30 py-20 text-zinc-700"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="flex justify-between">
        <Heading>
          <Main>Sobre nós</Main>
          <Subtitle>
            Inspirados e motivados a criar as melhores soluções para os seus sonhos
          </Subtitle>
        </Heading>
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '3rem' }}
            transition={{
              delay: 0.5 + 1 * 0.1,
              type: 'spring',
              stiffness: 50,
            }}
            className={`h-[3rem] w-[3rem] bg-red-500`}
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '3rem' }}
            transition={{
              delay: 0.5 + 1 * 0.1,
              type: 'spring',
              stiffness: 50,
            }}
            className={`h-[3rem] w-[3rem] bg-orange-700`}
          />
        </div>
      </div>
      <motion.div
        className="grid grid-cols-3 items-center gap-20"
        variants={itemVariants}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, cupiditate
          soluta at ut ea recusandae officiis nisi magni enim facilis optio possimus
          alias tempora iure nemo. Blanditiis adipisci id unde! Nisi, ad aut eligendi
          placeat unde assumenda quia voluptate. Labore error cumque harum nemo rem
          iste quos temporibus, id eius ullam repellat possimus recusandae saepe
          dolore temporibus quaerat. Nulla. Quibusdam facere labore fugiat. Hic nihil
          ut consectetur illum similique corporis debitis accusamus! Tempore iusto,
          eveniet quo est, odit facere nesciunt et ipsum, rem vel neque deleniti
          placeat! Laudantium, voluptatum!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, cupiditate
          soluta at ut ea recusandae officiis nisi magni enim facilis optio possimus
          alias tempora iure nemo. Blanditiis adipisci id unde! Nisi, ad aut eligendi
          placeat unde assumenda quia voluptate. Labore error cumque harum nemo rem
          iste quos temporibus, id eius ullam repellat possimus recusandae saepe
          dolore temporibus quaerat. Nulla. Quibusdam facere labore fugiat. Hic nihil
          ut consectetur illum similique corporis debitis accusamus! Tempore iusto,
          eveniet quo est, odit facere nesciunt et ipsum, rem vel neque deleniti
          placeat! Laudantium, voluptatum!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, cupiditate
          soluta at ut ea recusandae officiis nisi magni enim facilis optio possimus
          alias tempora iure nemo. Blanditiis adipisci id unde! Nisi, ad aut eligendi
          placeat unde assumenda quia voluptate. Labore error cumque harum nemo rem
          iste quos temporibus, id eius ullam repellat possimus recusandae saepe
          dolore temporibus quaerat. Nulla. Quibusdam facere labore fugiat. Hic nihil
          ut consectetur illum similique corporis debitis accusamus! Tempore iusto,
          eveniet quo est, odit facere nesciunt et ipsum, rem vel neque deleniti
          placeat! Laudantium, voluptatum!
        </Paragraph>
      </motion.div>
      <motion.div className="full-width bg-zinc-300" variants={itemVariants}>
        <div className="mx-auto flex w-full items-center gap-20">
          <Image
            src={'/building.jpg'}
            width={800}
            height={800}
            quality={80}
            alt="image"
            className="h-auto w-full"
          />
          <Paragraph className="w-3/4">
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
        className="space-y-20 bg-orange-700 p-10 text-white"
        variants={itemVariants}
      >
        <div className="max-w-5xl space-y-4 text-justify">
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
        </div>
        <div className="ml-auto max-w-5xl space-y-4 text-end">
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
        </div>
      </motion.div>

      <motion.div className="full-width bg-zinc-300" variants={itemVariants}>
        <div className="mx-auto flex w-full items-center gap-20">
          <Image
            src={'/building.jpg'}
            width={800}
            height={800}
            quality={80}
            alt="image"
            className="h-auto w-full"
          />
          <Paragraph className="w-3/4">
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
    </motion.section>
  );
}
