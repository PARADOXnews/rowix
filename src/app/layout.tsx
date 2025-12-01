import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rowix",
  description: "Rowix projectd",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {






  return (
    <html lang="en">
      <body className={`body ${geistSans.variable} ${roboto.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
