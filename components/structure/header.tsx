'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  const isHome = path === '/';

  const linkStyle = `font-medium text-base transition-opacity hover:cursor-pointer hover:opacity-50 ${
    isHome ? 'text-white' : 'text-zinc-700'
  }`;

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.header
      className={`content-grid absolute inset-0 z-20 mx-auto h-fit w-full border-b text-base ${isHome ? 'text-white' : 'text-zinc-700'}`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex h-20 items-center justify-between text-lg">
        <motion.div
          className={`text-xl font-bold ${isHome ? 'text-white' : 'text-zinc-700'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/" className={linkStyle + ' !font-bold'}>
            Nossa Arquitetura
          </Link>
        </motion.div>
        <nav className="flex items-center space-x-5 md:space-x-10">
          {['Sobre', 'Projetos', 'Contato'].map((item, i) => (
            <motion.a
              key={item}
              whileHover={{
                opacity: 0.5,
                transition: { duration: 0.2 },
              }}
              href={`/${item.toLowerCase()}`}
              className={linkStyle}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
