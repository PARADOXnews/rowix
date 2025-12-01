import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`body ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
