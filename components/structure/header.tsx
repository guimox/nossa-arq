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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.header
      className={`content-grid absolute inset-0 z-20 mx-auto h-fit w-full border-b text-base ${
        isHome ? 'text-white' : 'text-zinc-700'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="flex h-20 items-center justify-between text-lg">
        <motion.div
          className={`text-xl font-bold ${isHome ? 'text-white' : 'text-zinc-700'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className={linkStyle + ' !font-bold'}>
            Nossa Arquitetura
          </Link>
        </motion.div>

        <motion.nav
          className="flex items-center space-x-5 md:space-x-10"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {['Sobre', 'Projetos', 'Contato'].map((item) => (
            <motion.a
              key={item}
              whileHover={{
                opacity: 0.5,
                transition: { duration: 0.2 },
              }}
              href={`/${item.toLowerCase()}`}
              className={linkStyle}
              variants={navItemVariants}
              style={{ willChange: 'opacity, transform' }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
