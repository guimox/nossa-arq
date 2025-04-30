import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "astro:schema";
import SampleEmail from "../emails/sample-email";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(8, { message: 'O telefone deve ter pelo menos 8 caracteres.' }),
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
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
  cfTurnstileResponse: z.string().min(1, { message: 'Verificação de segurança necessária' })
});


function formatProjectType(type: string): string {
  const formatMap: Record<string, string> = {
    'predio-residencial': 'Prédio Residencial',
    'edificio-comercial': 'Edifício Comercial',
    'interiores': 'Interiores',
    'viabilidade': 'Viabilidade',
    'fachada': 'Fachada',
    'residencia': 'Residência',
    'reforma': 'Reforma',
    'paisagismo': 'Paisagismo'
  };
  return formatMap[type] || type;
}

async function validateTurnstileToken(token: string): Promise<boolean> {
    const secretKey = import.meta.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    
    try {
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      });
  
      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error('Error validating Turnstile token:', error);
      return false;
    }
  }

export const server = {
  contactSubmit: defineAction({
    accept: "form",
    input: formSchema,
    async handler({ name, email, phone, projectType, message, cfTurnstileResponse }) {
        const isValidToken = await validateTurnstileToken(cfTurnstileResponse);
        
        if (!isValidToken) {
          return {
            success: false,
            message: 'Falha na verificação de segurança. Por favor, tente novamente.',
            data: { name, email, phone, projectType, message }
          };
        } 

      if (!import.meta.env.RESEND_API_KEY) {
          console.error("RESEND_API_KEY is missing!");
          return {
              success: false,
              message: "Server configuration error.", 
          };
      } else {
          console.log("Resend API Key found (length):", import.meta.env.RESEND_API_KEY.length); 
      }

      try {
        console.log("Rendering email content...");
        const emailContent = SampleEmail({
          name,
          email,
          phone,
          projectType,
          message
        });

        const html = await render(emailContent);
        const text = await render(emailContent, {
          plainText: true,
        });
        console.log("Email content rendered.");

        const payload = {
          from: "Nossa Arquitetura - Contato <form@nossa.arq.br>",
          to: ["contato@nossa.arq.br"],
          subject: `Novo contato: ${formatProjectType(projectType)}`,
          text,
          replyTo: email,
        };

        const { data, error } = await resend.emails.send(payload);

        if (error) {
          console.error("Email sending error:", error);
          return {
            success: false,
            message: 'Houve um problema ao enviar o formulário. Por favor, tente novamente mais tarde.',
          };
        }

        if (!data || !data.id) {
            console.error("Email sending failed: No data or data.id received from Resend, but no explicit error object.", data);
             return {
                success: false,
                message: 'Falha ao enviar o email. Resposta inesperada do serviço.',
            };
        }

        console.log("Email sent successfully! Resend ID:", data.id);
        return {
          success: true,
          message: 'Obrigado pelo seu contato. Responderemos em breve.',
        };
      } catch (error) {
        console.error("Caught exception during form submission process:", error);
        return {
          success: false,
          message: 'Houve um problema ao processar seu pedido. Por favor, tente novamente mais tarde.',
        };
      }
    },
  }),
};