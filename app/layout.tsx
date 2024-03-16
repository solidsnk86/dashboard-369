import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Panel Atlas',
    default: 'Panel Atlas'
  },
  description: 'Aplicación de Gestión de Facturas',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
