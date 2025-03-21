'use client';
import { useState } from 'react';
import Image from 'next/image';
import Paragraph from '../typography/paragraph';
import Subtitle from '../typography/subtitle';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface CardArq {
  image: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

export default function CardArq({ image, title, subtitle, tags = [] }: CardArq) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden bg-white hover:border"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/2] w-full overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={'/' + image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            className="object-cover"
            alt={title}
          />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-black"
          animate={{
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <Subtitle className="transition-colors duration-300 group-hover:text-zinc-900">
          {title}
        </Subtitle>
        <Paragraph className="text-zinc-500">{subtitle}</Paragraph>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-100 text-xs text-zinc-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Hover accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-zinc-800"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
