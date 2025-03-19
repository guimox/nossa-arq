'use client';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  const isHome = path === '/';

  const linkStyle = `font-medium transition-opacity hover:cursor-pointer hover:opacity-50 ${
    isHome ? 'text-white' : 'text-zinc-700'
  }`;

  return (
    <header
      className={`content-grid absolute inset-0 z-20 mx-auto h-fit w-full border-b ${isHome ? 'text-white' : 'text-zinc-700'}`}
    >
      <div className="flex h-20 items-center justify-between text-lg">
        <div
          className={`text-xl font-bold ${isHome ? 'text-white' : 'text-zinc-700'}`}
        >
          <a href="/" className={linkStyle}>
            Nossa Arquitetura
          </a>
        </div>
        <nav className="flex items-center space-x-10">
          <a href="/sobre" className={linkStyle}>
            Sobre
          </a>
          <a href="/projetos" className={linkStyle}>
            Projetos
          </a>
          <a href="/contato" className={linkStyle}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
