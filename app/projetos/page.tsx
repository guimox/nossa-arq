'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CardArq from '@/components/structure/card-arq';
import Heading from '@/components/structure/heading';
import Main from '@/components/typography/main';
import Subtitle from '@/components/typography/subtitle';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const itemsArq = [
  {
    title: 'Edíficio Roberto Carlos',
    subtitle: 'Aconchego, visão, design',
    image: 'building.jpg',
    tags: ['Residenciais', 'Urbanos'],
  },
  {
    title: 'Mansão Vista Mar',
    subtitle: 'Elegância à beira-mar',
    image: 'building.jpg',
    tags: ['Residenciais', 'Interiores'],
  },
  {
    title: 'Parque Central',
    subtitle: 'Espaço urbano revitalizado',
    image: 'building.jpg',
    tags: ['Urbanos'],
  },
  {
    title: 'Apartamento Moderno',
    subtitle: 'Minimalismo e funcionalidade',
    image: 'building.jpg',
    tags: ['Residenciais', 'Interiores'],
  },
  {
    title: 'Centro Comercial Luz',
    subtitle: 'Inovação em espaços comerciais',
    image: 'building.jpg',
    tags: ['Edifícios', 'Urbanos'],
  },
  {
    title: 'Casa Vila Verde',
    subtitle: 'Sustentabilidade e conforto',
    image: 'building.jpg',
    tags: ['Residenciais'],
  },
];

const allTags = [
  'Todos',
  ...Array.from(new Set(itemsArq.flatMap((item) => item.tags))),
];

export default function ProjetosPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tagFromUrl = searchParams.get('tag');
  const initialTag = tagFromUrl
    ? allTags.find((tag) => tag.toLowerCase() === tagFromUrl.toLowerCase()) ||
      'Todos'
    : 'Todos';

  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [filteredItems, setFilteredItems] = useState(itemsArq);

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tag === 'Todos') {
      params.delete('tag');
    } else {
      params.set('tag', tag.toLowerCase());
    }

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(newUrl);

    setSelectedTag(tag);
  };

  useEffect(() => {
    if (selectedTag === 'Todos') {
      setFilteredItems(itemsArq);
    } else {
      setFilteredItems(
        itemsArq.filter((item) => item.tags.some((tag) => tag === selectedTag))
      );
    }
  }, [selectedTag]);

  useEffect(() => {
    const tagFromUrl = searchParams.get('tag');
    if (!tagFromUrl) {
      setSelectedTag('Todos');
    } else {
      const matchedTag = allTags.find(
        (tag) => tag.toLowerCase() === tagFromUrl.toLowerCase()
      );
      setSelectedTag(matchedTag || 'Todos');
    }
  }, [searchParams]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const colorBlockVariants = {
    hidden: { height: 0 },
    visible: (i: number) => ({
      height: '3rem',
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 50,
      },
    }),
  };

  return (
    <section className="content-grid mt-10 space-y-12 px-4 py-10 text-zinc-700 md:mt-20 md:space-y-20 md:px-6 md:py-20 lg:px-0">
      <Heading className="flex items-center space-y-4 text-center">
        <div className="flex items-center gap-4">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={colorBlockVariants}
            className="h-[3rem] w-[3rem] bg-red-500"
          />
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={colorBlockVariants}
            className="h-[3rem] w-[3rem] bg-orange-700"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Main>Projetos</Main>
          <Subtitle>Feitos de forma única</Subtitle>
        </motion.div>

        <motion.ul
          className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {allTags.map((tag) => (
            <li key={tag}>
              <Badge
                variant={selectedTag === tag ? 'default' : 'outline'}
                className={`text-sm transition-all duration-300 hover:cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-zinc-800 text-white'
                    : 'hover:bg-zinc-100'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            </li>
          ))}
        </motion.ul>
      </Heading>

      <motion.section
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item, index) => (
          <motion.div key={item.title + index} variants={itemVariants}>
            <CardArq
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
}
