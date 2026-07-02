import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Video, Info } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { getEventBySlugQuery } from "@/sanity/lib/queries";

import { PortableText } from "next-sanity";

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
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
  },
};

export const revalidate = 60;

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = await client.fetch(getEventBySlugQuery, { slug: id });

  if (!event) {
    return {
      title: 'Evento non trovato | Cinema Rivoli',
    };
  }

  const imageUrl = event.imageUrl || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop";
  const description = event.description || "Scopri la programmazione del Cinema Rivoli.";

  return {
    title: `${event.title} | Cinema Rivoli`,
    description: description,
    openGraph: {
      title: `${event.title} | Cinema Rivoli`,
      description: description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${event.title} | Cinema Rivoli`,
      description: description,
      images: [imageUrl],
    },
  };
}
export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fetch dall'API di Sanity tramite lo slug (che usiamo come id nell'URL)
  const event = await client.fetch(getEventBySlugQuery, { slug: id });

  if (!event) {
    notFound();
  }

  // Fallback map per i dati in caso manchino campi
  const imageUrl = event.imageUrl || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop";
  const showtimes = Array.isArray(event.showtimes) ? event.showtimes.join(" - ") : (event.showtimes || "In aggiornamento");
  const description = event.plot || event.description || "Nessuna descrizione disponibile al momento.";

  // Funzione per convertire URL YouTube standard (youtu.be o youtube.com/watch) in URL da embed
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };
  const embedUrl = event.trailerUrl ? getYouTubeEmbedUrl(event.trailerUrl) : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': event.category === 'cinema' ? 'ScreeningEvent' : 'Event',
    name: event.title,
    description: description,
    image: imageUrl,
    location: {
      '@type': 'MovieTheater',
      name: 'Cinema Teatro Rivoli',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Nicolo Tortorici, 6',
        addressLocality: 'Mazara del Vallo',
        addressRegion: 'TP',
        postalCode: '91026',
        addressCountry: 'IT'
      }
    }
  };

  return (
    <main className="min-h-screen bg-black pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Intestazione e Immagine Hero */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt={event.title}
            className="w-full h-full object-cover opacity-60 blur-[2px]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 flex flex-col md:flex-row gap-8 items-end">
            {/* Locandina in evidenza */}
            <div className="hidden md:block shrink-0 w-64 h-96 rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl relative -mb-24 z-10 bg-zinc-900">
              <img src={imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>

            {/* Titolo e info base */}
            <div className="grow z-10">
              <div className="mb-4">
                <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors mb-6 text-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Torna alla programmazione
                </Link>
                <div className="uppercase tracking-widest text-xs font-bold text-red-500 mb-2">
                  {event.category}
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {event.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                {event.room && (
                  <div className={`flex items-center backdrop-blur-xs px-4 py-2 rounded-full border ${event.room === 'Sala Rossa' ? 'bg-red-950/50 border-red-900/50 text-red-200' : event.room === 'Sala Gialla' ? 'bg-yellow-950/50 border-yellow-900/50 text-yellow-200' : 'bg-zinc-900/80 border-zinc-800 text-zinc-300'}`}>
                    <span className="font-bold">{event.room}</span>
                  </div>
                )}
                <div className="flex items-center text-zinc-300 bg-zinc-900/80 backdrop-blur-xs px-4 py-2 rounded-full border border-zinc-800">
                  <Clock className="w-4 h-4 mr-2 text-red-500" />
                  Orari: <strong className="ml-1 text-white">{showtimes}</strong>
                </div>
                {event.duration && (
                  <div className="flex items-center text-zinc-300 bg-zinc-900/80 backdrop-blur-xs px-4 py-2 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4 mr-2 text-red-500" />
                    Durata: <strong className="ml-1 text-white">{event.duration} min</strong>
                  </div>
                )}
                {event.director && (
                  <div className="flex items-center text-zinc-300 bg-zinc-900/80 backdrop-blur-xs px-4 py-2 rounded-full border border-zinc-800">
                    <Info className="w-4 h-4 mr-2 text-red-500" />
                    {event.category === 'cinema' ? 'Regia:' : 'Direzione Artistica:'} <strong className="ml-1 text-white">{event.director}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenuto Principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Colonna Sinistra (Trama e Cast) */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">
                {event.category === 'cinema' ? 'Trama' : 'Programmazione e Dettagli'}
              </h2>
              <div className="prose prose-invert max-w-none text-zinc-300 text-lg leading-relaxed">
                {event.plot ? (
                  <PortableText value={event.plot} components={portableTextComponents} />
                ) : (
                  <p className="whitespace-pre-wrap">{event.description || "Nessuna descrizione disponibile al momento."}</p>
                )}
              </div>
            </section>

            {event.cast && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Cast</h2>
                <p className="text-zinc-300 text-lg leading-relaxed">{event.cast}</p>
              </section>
            )}
          </div>

          {/* Colonna Destra (Trailer e Azioni) */}
          <div className="space-y-8">
            {embedUrl && (
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                <div className="bg-zinc-950 px-6 py-4 border-b border-zinc-800 flex items-center">
                  <Video className="w-5 h-5 text-red-500 mr-3" />
                  <h3 className="font-bold text-white">Trailer Ufficiale</h3>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Acquisto Biglietti</h3>
              <p className="text-zinc-400 text-sm">
                I biglietti possono essere acquistati direttamente in cassa prima dell'inizio dello spettacolo. Ti aspettiamo!
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
