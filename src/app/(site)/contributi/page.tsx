import { client } from "@/sanity/lib/client";
import { getSettingsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bandi e Contributi Pubblici | Cinema Rivoli",
  description: "Trasparenza sui bandi e contributi pubblici ricevuti dal Cinema Teatro Rivoli.",
};

export const revalidate = 60;

export default async function ContributiPage() {
  const settings = await client.fetch(getSettingsQuery);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[60vh]">
      <div className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          Bandi e Contributi Pubblici
        </h1>
        <p className="text-gray-400 text-lg">
          Informazioni e trasparenza sui contributi ricevuti.
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12 text-center flex flex-col items-center justify-center gap-8">
        {settings?.sponsorTexts && settings.sponsorTexts.length > 0 ? (
          <div className="flex flex-col gap-6 w-full max-w-3xl text-left">
            {settings.sponsorTexts.map((text: string, idx: number) => (
              <div key={idx} className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800 text-zinc-300 text-lg leading-relaxed prose prose-invert w-full">
                {text}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 italic">Nessuna informazione presente al momento.</p>
        )}

        {settings?.sponsorLogos && settings.sponsorLogos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4 pt-8 border-t border-zinc-800 w-full">
            {settings.sponsorLogos.map((logoUrl: string, idx: number) => (
              <img
                key={idx}
                src={logoUrl}
                alt={`Logo Sponsor ${idx + 1}`}
                className="max-h-24 md:max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
