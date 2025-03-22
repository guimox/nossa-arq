'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Turnstile, { useTurnstile } from 'react-turnstile';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, insira um email válido.',
  }),
  phone: z.string().min(8, {
    message: 'O telefone deve ter pelo menos 8 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
  turnstileToken: z.string().min(1, {
    message: 'Por favor, complete a verificação para enviar o formulário.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormContact(): React.ReactElement {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
    visible: boolean;
  }>({
    success: false,
    message: '',
    visible: false,
  });

  const turnstile = useTurnstile();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      turnstileToken: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues): Promise<void> => {
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      console.log('Form data submitted:', data);

      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form and show success message
      form.reset();

      setFormStatus({
        success: true,
        message: 'Obrigado pelo seu contato. Responderemos em breve.',
        visible: true,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        success: false,
        message:
          'Houve um problema ao enviar o formulário. Por favor, tente novamente.',
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mr-auto w-full max-w-2xl">
      {formStatus.visible && (
        <div
          className={`mb-6 rounded-md p-4 ${
            formStatus.success
              ? 'border border-green-200 bg-green-50 text-green-800'
              : 'border border-red-200 bg-red-50 text-red-800'
          }`}
        >
          <p>{formStatus.message}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="seu.email@exemplo.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite sua mensagem aqui"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cloudflare Turnstile Integration */}
          <FormField
            control={form.control}
            name="turnstileToken"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-center">
                    {/* Placeholder for Turnstile */}
                    <div
                      className="flex h-20 w-full items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-4"
                      onClick={() => {
                        // Simulate successful verification
                        field.onChange('simulated-token-value');
                      }}
                    >
                      <Turnstile
                        sitekey="1x00000000000000000000AA"
                        onVerify={(token: string) => {
                          fetch('/login', {
                            method: 'POST',
                            body: JSON.stringify({ token }),
                          }).then((response) => {
                            if (!response.ok) turnstile.reset();
                          });
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
