import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL('https://cineteatrorivoli.it'),
  title: "Cinema Teatro Rivoli - Multisala e Arena a Mazara del Vallo",
  description: "Il tuo multisala di fiducia a Mazara del Vallo. Scopri la programmazione di Cinema, Teatro e Arena.",
  openGraph: {
    title: "Cinema Teatro Rivoli - Multisala e Arena a Mazara del Vallo",
    description: "Il tuo multisala di fiducia a Mazara del Vallo. Scopri la programmazione di Cinema, Teatro e Arena.",
    url: 'https://cineteatrorivoli.it',
    siteName: 'Cinema Teatro Rivoli',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cinema Rivoli",
    description: "Scopri la programmazione di Cinema, Teatro e Arena.",
  }
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
        {children}
      </body>
    </html>
  );
}
