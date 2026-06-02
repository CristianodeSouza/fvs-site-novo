import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FVS Incorporações',
  description: 'Site institucional FVS Incorporações',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
