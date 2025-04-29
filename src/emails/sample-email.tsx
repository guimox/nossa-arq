import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text
} from '@react-email/components';

const projectTypeMap: Record<string, string> = {
    'predio-residencial': 'Prédio Residencial',
    'edificio-comercial': 'Edifício Comercial',
    'interiores': 'Projeto de interiores',
    'viabilidade': 'Estudo de viabilidade',
    'fachada': 'Estudo de fachada',
    'residencia': 'Residência unifamiliar',
    'reforma': 'Projeto de reforma',
    'paisagismo': 'Projeto de paisagismo'
  };
  

interface SampleEmailProps {
    name?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    message?: string;
    username?: string; // For the simple username case  
}

export default function SampleEmail({ name, email, phone, projectType, message, username }:SampleEmailProps) {
  const isContactForm = name && email && phone && projectType && message;
  
  return (
    <Html>
      <Head />
      <Preview>
        {isContactForm 
          ? `Novo formulário de contato de ${name}`
          : 'Bem-vindo ao nosso serviço!'}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            {isContactForm 
              ? 'Novo formulário de contato recebido'
              : `Olá ${username}!`}
          </Heading>
          
          {isContactForm ? (
            <Section>
              <Text style={text}>Um novo contato foi recebido com os seguintes detalhes:</Text>
              
              <Text style={text}><strong>Nome:</strong> {name}</Text>
              <Text style={text}><strong>Email:</strong> {email}</Text>
              <Text style={text}><strong>Telefone:</strong> {phone}</Text>
              <Text style={text}>
                <strong>Tipo de projeto:</strong> {projectTypeMap[projectType] || projectType}
              </Text>
              
              <Hr style={hr} />
              
              <Text style={text}><strong>Mensagem:</strong></Text>
              <Text style={text}>{message}</Text>
            </Section>
          ) : (
            <Section>
              <Text style={text}>Obrigado por se cadastrar em nosso serviço!</Text>
              <Text style={text}>
                Esta é uma mensagem de confirmação para informar que o seu cadastro foi realizado com sucesso.
              </Text>
            </Section>
          )}
          
          <Hr style={hr} />
          
          <Text style={footer}>
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styling
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 25px 48px',
  borderRadius: '5px',
  maxWidth: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '16px 0',
};

const text = {
  color: '#444',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '24px',
  marginTop: '12px',
  textAlign: 'center' as const,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};