'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle =
    'text-white font-medium transition-opacity hover:cursor-pointer hover:opacity-50';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute inset-0 z-20 mx-auto h-fit w-full max-w-[1700px] px-6 text-white">
      <div className="flex h-16 items-center justify-between text-lg">
        <div className="text-xl font-bold">Nossa Arquitetura</div>
        <nav className="flex items-center space-x-10">
          <a href="#sobre" className={linkStyle}>
            Sobre
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center ${linkStyle} focus:outline-none`}
            >
              <span>Projetos</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isOpen && (
              <div className="absolute left-0 z-20 mt-2 max-h-96 w-48 overflow-y-auto rounded-md bg-white py-2 shadow-lg">
                <a
                  href="#residenciais"
                  className="block px-4 py-2 text-sm text-gray-700 transition-opacity hover:opacity-50"
                >
                  Residenciais
                </a>
                <a
                  href="#urbanisticos"
                  className="block px-4 py-2 text-sm text-gray-700 transition-opacity hover:opacity-50"
                >
                  Urbanísticos
                </a>
              </div>
            )}
          </div>
          <a href="#contato" className={linkStyle}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
