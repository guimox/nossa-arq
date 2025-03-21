import Link from 'next/link';

const Footer = () => {
  const linkStyle = `font-medium transition-opacity hover:cursor-pointer hover:opacity-50`;

  return (
    <footer className="content-grid mt-12 w-full border-t text-zinc-700 md:mt-20 lg:mt-40">
      <div className="content-grid mx-auto px-4 md:px-6">
        <div className="flex flex-col py-8 md:py-10 lg:flex-row lg:justify-between">
          <div className="mb-8 w-full lg:mb-0 lg:max-w-2xl">
            <div className="mb-4 text-xl font-bold text-zinc-700">
              Nossa Arquitetura
            </div>
            <p className="text-zinc-500">
              Transformando espaços com design inovador e sustentável para criar
              ambientes que inspiram.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:gap-12">
            <div>
              <h3 className="mb-3 text-lg font-bold text-zinc-700">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className={linkStyle}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className={linkStyle}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/projetos" className={linkStyle}>
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className={linkStyle}>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-zinc-700">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/servicos/residencial" className={linkStyle}>
                    Residencial
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/comercial" className={linkStyle}>
                    Comercial
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/interiores" className={linkStyle}>
                    Design de Interiores
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/paisagismo" className={linkStyle}>
                    Paisagismo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 mt-6 sm:col-span-1 sm:mt-0">
              <h3 className="mb-3 text-lg font-bold text-zinc-700">Contato</h3>
              <ul className="space-y-2">
                <li className="text-zinc-500">contato@nossaarquitetura.com</li>
                <li className="text-zinc-500">+55 (11) 9999-9999</li>
                <li className="text-zinc-500">São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 text-sm">
          <div className="flex flex-col items-center space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
            <p>
              © {new Date().getFullYear()} Nossa Arquitetura. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacidade" className={linkStyle}>
                Política de Privacidade
              </Link>
              <Link href="/termos" className={linkStyle}>
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
