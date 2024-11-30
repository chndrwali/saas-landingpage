import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'Xora | SaaS Landing Page',
    template: '%s - Xora | SaaS Landing Page',
  },
  description: 'Daftarkan bisnis Anda bersama kami untuk memperluas jangkauan dan meningkatkan perkembangan usaha Anda.',
  creator: 'Candra Wali Sanjaya',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
