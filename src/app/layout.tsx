import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cinema Rivoli - Multisala, Teatro e Arena",
  description: "Il tuo multisala di fiducia a Rivoli. Scopri la programmazione di Cinema, Teatro e Arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased bg-black text-gray-200`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
