import { Playfair_Display, Inter } from 'next/font/google';

export const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
