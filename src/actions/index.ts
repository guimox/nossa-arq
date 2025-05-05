import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { z } from 'astro:schema';
import SampleEmail from '../emails/sample-email';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z
    .string()
    .min(8, { message: 'O telefone deve ter pelo menos 8 caracteres.' }),
  projectType: z.enum(
    [
      'predio-residencial',
      'edificio-comercial',
      'interiores',
      'viabilidade',
      'fachada',
      'residencia',
      'reforma',
      'paisagismo',
    ],
    {
      message: 'Por favor, selecione um tipo de projeto.',
    }
  ),
  message: z
    .string()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
    .max(500, { message: 'A mensagem deve ter no máximo 500 caracteres.' }),
  cfTurnstileResponse: z
    .string()
    .min(1, { message: 'Verificação de segurança necessária' }),
});

function formatProjectType(type: string): string {
  const formatMap: Record<string, string> = {
    'predio-residencial': 'Prédio Residencial',
    'edificio-comercial': 'Edifício Comercial',
    interiores: 'Interiores',
    viabilidade: 'Viabilidade',
    fachada: 'Fachada',
    residencia: 'Residência',
    reforma: 'Reforma',
    paisagismo: 'Paisagismo',
  };
  return formatMap[type] || type;
}

async function validateTurnstileToken(token: string): Promise<boolean> {
  const secretKey = import.meta.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  try {
    console.log('Validating Turnstile token...');

    if (!secretKey) {
      console.error('CLOUDFLARE_TURNSTILE_SECRET_KEY is missing!');
      return false;
    }

    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();
    console.log('Turnstile validation result:', data);
    return data.success === true;
  } catch (error) {
    console.error('Error validating Turnstile token:', error);
    return false;
  }
}

export const server = {
  contactSubmit: defineAction({
    accept: 'form',
    input: formSchema,
    async handler({
      name,
      email,
      phone,
      projectType,
      message,
      cfTurnstileResponse,
    }) {
      console.log('=== CONTACT SUBMIT ACTION HANDLER STARTED ===');
      console.log('Form data received:', { name, email, phone, projectType });

      // Store form data to return in case of error
      const formData = { name, email, phone, projectType, message };

      try {
        // 1. Check for API key
        if (!import.meta.env.RESEND_API_KEY) {
          console.error('RESEND_API_KEY is missing!');
          return {
            success: false,
            message:
              'Erro de configuração do servidor. Por favor, contate o administrador.',
            data: formData,
          };
        }

        console.log(
          'Resend API Key found (length):',
          import.meta.env.RESEND_API_KEY.length
        );

        // 2. Validate Turnstile
        const isValidToken = await validateTurnstileToken(cfTurnstileResponse);
        console.log('Turnstile validation result:', isValidToken);

        if (!isValidToken) {
          console.log('Turnstile validation failed');
          return {
            success: false,
            message:
              'Falha na verificação de segurança. Por favor, tente novamente.',
            data: formData,
          };
        }

        // 3. Render email
        console.log('Rendering email content...');
        const emailContent = SampleEmail({
          name,
          email,
          phone,
          projectType: formatProjectType(projectType),
          message,
        });

        const html = await render(emailContent);
        const text = await render(emailContent, {
          plainText: true,
        });
        console.log('Email content rendered successfully');

        const payload = {
          from: 'Nossa Arquitetura - Contato <form@nossa.arq.br>',
          to: ['contato@nossa.arq.br'],
          subject: `Novo contato: ${formatProjectType(projectType)}`,
          html,
          text,
          replyTo: email,
        };

        const { data, error } = await resend.emails.send(payload);

        if (error) {
          console.error('Resend API error:', error);
          return {
            success: false,
            message:
              'Falha ao enviar o email. Por favor, tente novamente mais tarde.',
            error: error.message,
            data: formData,
          };
        }

        if (!data || !data.id) {
          console.error(
            'Email sending failed: No data or data.id received from Resend'
          );
          return {
            success: false,
            message: 'Falha ao enviar o email. Resposta inesperada do serviço.',
            data: formData,
          };
        }

        console.log('Email sent successfully! Resend ID:', data.id);
        return {
          success: true,
          message: 'Obrigado pelo seu contato. Responderemos em breve.',
        };
      } catch (error: any) {
        // Catch any unexpected errors
        console.error('Unexpected error in contact form handler:', error);

        return {
          success: false,
          message:
            'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
          error: error.message || 'Unknown error',
          data: formData,
        };
      } finally {
        console.log('=== CONTACT SUBMIT ACTION HANDLER COMPLETED ===');
      }
    },
  }),
};
