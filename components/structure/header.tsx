'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const path = usePathname();
  const isHome = path === '/';
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <motion.header
      className={`content-grid absolute inset-0 z-20 mx-auto h-fit w-full border-b text-base`}
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
          className="hidden items-center space-x-10 md:flex"
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
        <motion.button
          className={`z-50 flex flex-col space-y-1.5 p-2 md:hidden ${isHome ? 'text-white' : 'text-zinc-700'}`}
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            className={`block h-0.5 w-6 ${isHome ? 'bg-white' : 'bg-zinc-700'}`}
            animate={isNavOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={`block h-0.5 w-6 ${isHome ? 'bg-white' : 'bg-zinc-700'}`}
            animate={isNavOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={`block h-0.5 w-6 ${isHome ? 'bg-white' : 'bg-zinc-700'}`}
            animate={isNavOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>

      <motion.div
        className={`absolute top-20 left-0 z-40 w-full overflow-hidden md:hidden ${
          isHome ? 'bg-black/90' : 'bg-white'
        }`}
        initial="closed"
        animate={isNavOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <motion.div className="flex flex-col p-4">
          {['Sobre', 'Projetos', 'Contato'].map((item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`${linkStyle} my-3 py-2 text-lg`}
              variants={navItemVariants}
              onClick={() => setIsNavOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
