import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/globals.css";
import { karla, notoSans } from './fonts';

export const metadata: Metadata = {
  title: "Mpcoin App",
  description: "Mpcoin App",
};

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${notoSans.variable} ${karla.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
