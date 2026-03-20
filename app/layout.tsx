import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'SOLO | Crie um negócio simples, lucrativo e sem operação inchada',
  description: 'Aprenda a estruturar um negócio solo com tese, promessa, método e produtos, sem operação inchada, conteúdo solto ou ofertas confusas.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
