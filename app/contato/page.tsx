import FormContact from '@/components/structure/form-contact';
import Heading from '@/components/structure/heading';
import Main from '@/components/typography/main';
import Subtitle from '@/components/typography/subtitle';

export default function ContatoPage() {
  return (
    <section className="content-grid mt-10 space-y-12 px-4 py-10 text-zinc-700 md:mt-20 md:space-y-20 md:px-6 md:py-20 lg:px-0">
      <Heading>
        <Main>Contato</Main>
        <Subtitle>
          Use o formulário, envie-nos um email ou faça-nos uma ligação.
        </Subtitle>
      </Heading>
      <FormContact />
    </section>
  );
}
