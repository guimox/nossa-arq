'use client';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname();
  const isHome = path === '/';

  const linkStyle = `font-medium transition-opacity hover:cursor-pointer hover:opacity-50 ${
    isHome ? 'text-white' : 'text-zinc-700'
  }`;

  return (
    <footer
      className={`content-grid mt-20 w-full border-t md:mt-40 ${isHome ? 'text-white' : 'text-zinc-700'}`}
    >
      <div className="flex flex-col py-10 md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0">
          <div
            className={`mb-4 text-xl font-bold ${isHome ? 'text-white' : 'text-zinc-700'}`}
          >
            Nossa Arquitetura
          </div>
          <p className={`max-w-md ${isHome ? 'text-white/80' : 'text-zinc-500'}`}>
            Transformando espaços com design inovador e sustentável para criar
            ambientes que inspiram.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3
              className={`mb-4 text-lg font-medium ${isHome ? 'text-white' : 'text-zinc-700'}`}
            >
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className={linkStyle}>
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre" className={linkStyle}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="/projetos" className={linkStyle}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="/contato" className={linkStyle}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`mb-4 text-lg font-medium ${isHome ? 'text-white' : 'text-zinc-700'}`}
            >
              Serviços
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/servicos/residencial" className={linkStyle}>
                  Residencial
                </a>
              </li>
              <li>
                <a href="/servicos/comercial" className={linkStyle}>
                  Comercial
                </a>
              </li>
              <li>
                <a href="/servicos/interiores" className={linkStyle}>
                  Design de Interiores
                </a>
              </li>
              <li>
                <a href="/servicos/paisagismo" className={linkStyle}>
                  Paisagismo
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3
              className={`mb-4 text-lg font-medium ${isHome ? 'text-white' : 'text-zinc-700'}`}
            >
              Contato
            </h3>
            <ul className="space-y-2">
              <li className={isHome ? 'text-white/80' : 'text-zinc-500'}>
                contato@nossaarquitetura.com
              </li>
              <li className={isHome ? 'text-white/80' : 'text-zinc-500'}>
                +55 (11) 9999-9999
              </li>
              <li className={isHome ? 'text-white/80' : 'text-zinc-500'}>
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`py-6 text-sm ${isHome ? 'border-t border-white/20 text-white/70' : 'text-zinc-500'}`}
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p>
            © {new Date().getFullYear()} Nossa Arquitetura. Todos os direitos
            reservados.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="/privacidade" className={linkStyle}>
              Política de Privacidade
            </a>
            <a href="/termos" className={linkStyle}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
