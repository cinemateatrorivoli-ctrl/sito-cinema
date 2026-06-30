import { client } from "@/sanity/lib/client";
import { getSettingsQuery } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-4 text-zinc-300 leading-relaxed">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-zinc-300">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-zinc-300">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function CookiePolicyPage() {
  const settings = await client.fetch(getSettingsQuery);

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla Home
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
          Cookie Policy
        </h1>

        <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-2xl">
          {settings?.cookiePolicyText ? (
            <PortableText value={settings.cookiePolicyText} components={portableTextComponents} />
          ) : (
            <p className="text-zinc-400 italic">
              L'informativa sui cookie è in fase di aggiornamento. Torna a visitare questa pagina più tardi.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
