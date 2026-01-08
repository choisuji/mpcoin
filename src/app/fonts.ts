// app/fonts.ts
import { Karla, Noto_Sans } from 'next/font/google';

export const karla = Karla({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800'],
  style: ['normal', 'italic'],
  variable: '--font-karla',
});

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-noto',
});