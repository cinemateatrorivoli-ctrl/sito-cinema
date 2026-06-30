import EventCard from "@/components/EventCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { getEventsByCategoryQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function ArenaPage() {
  const arenaEvents = await client.fetch(getEventsByCategoryQuery, { category: "arena" });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Arena
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Cinema all'aperto, concerti ed eventi speciali sotto il cielo stellato. La magia dell'estate ti aspetta.
          </p>
        </div>

      </div>

      {arenaEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arenaEvents.map((event: any) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Nessun evento in programma</h2>
          <p className="text-zinc-400 text-lg">
            Attualmente l'Arena è chiusa o non ci sono eventi caricati. Torna a visitarci all'arrivo della bella stagione!
          </p>
        </div>
      )}
    </div>
  );
}
