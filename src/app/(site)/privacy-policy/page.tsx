import { client } from "@/sanity/lib/client";
import { getSettingsQuery } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export default async function PrivacyPolicyPage() {
  const settings = await client.fetch(getSettingsQuery);

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla Home
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-red max-w-none bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-2xl">
          {settings?.privacyPolicyText ? (
            <PortableText value={settings.privacyPolicyText} />
          ) : (
            <p className="text-zinc-400 italic">
              L'informativa sulla privacy è in fase di aggiornamento. Torna a visitare questa pagina più tardi.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
