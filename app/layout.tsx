import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';
import CustomCursor from '@/components/structure/cursor-custom';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nossa Arquitetura & Urbanismo',
  description: 'Sua visão, nossa solução para o seu empreendimento',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} overflow-x-hidden antialiased transition-all duration-500 ease-in-out`}
      >
        <Header />
        <CustomCursor />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
