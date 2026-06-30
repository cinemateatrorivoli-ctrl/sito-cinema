import EventCard from "@/components/EventCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { getEventsByCategoryQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function TeatroPage() {
  const teatroEvents = await client.fetch(getEventsByCategoryQuery, { category: "teatro" });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Spettacoli Teatrali
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Dai classici della prosa alle commedie contemporanee, esplora il nostro cartellone teatrale.
          </p>
        </div>

      </div>

      {teatroEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teatroEvents.map((event: any) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Nessun spettacolo in programma</h2>
          <p className="text-zinc-400 text-lg">
            Al momento non ci sono spettacoli teatrali in cartellone. Continua a seguirci per scoprire la nuova stagione!
          </p>
        </div>
      )}
    </div>
  );
}
