"use client";

import { useEffect, useRef } from "react";
import EventCard from "./EventCard";
import { Film, Ticket, Moon } from "lucide-react";

function AutoScrollingRow({ title, icon, events }: { title: string, icon: React.ReactNode, events: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      // Se non c'è abbastanza contenuto per scorrere, non fare nulla
      if (container.scrollWidth <= container.clientWidth) return;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // Raggiunta la fine, torna all'inizio in modo fluido
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scorri di 350px (circa la larghezza di una card)
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 4000); // Scorre ogni 4 secondi

    return () => clearInterval(scrollInterval);
  }, []);

  if (events.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="font-heading text-3xl font-bold text-white">{title}</h3>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {events.map((event, idx) => (
          <div key={event._id || event.id || idx} className="shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] snap-start">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedEvents({ events }: { events: any[] }) {
  // Separiamo gli eventi per categoria
  // Map category to handle both mock ('cinema') and sanity ('cinema') just in case
  const cinemaEvents = events.filter(e => e.category === "cinema" || e.categoria === "cinema");
  const teatroEvents = events.filter(e => e.category === "teatro" || e.categoria === "teatro");
  const arenaEvents = events.filter(e => e.category === "arena" || e.categoria === "arena");

  // Se non ci sono eventi in nessuna categoria, mostriamo un messaggio
  if (cinemaEvents.length === 0 && teatroEvents.length === 0 && arenaEvents.length === 0) {
    return (
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Prossimamente</h2>
          <p className="text-gray-400 text-lg">
            Il nuovo cartellone è in fase di aggiornamento. Torna a trovarci presto!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-zinc-800 pb-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">In Programmazione</h2>
          <p className="text-gray-400 text-lg">
            Scopri tutti i nostri appuntamenti divisi per categoria.
          </p>
        </div>

        <AutoScrollingRow title="Al Cinema" icon={<Film className="text-red-500 w-8 h-8" />} events={cinemaEvents} />
        <AutoScrollingRow title="A Teatro" icon={<Ticket className="text-red-500 w-8 h-8" />} events={teatroEvents} />
        <AutoScrollingRow title="Arena" icon={<Moon className="text-red-500 w-8 h-8" />} events={arenaEvents} />
      </div>
    </section>
  );
}
