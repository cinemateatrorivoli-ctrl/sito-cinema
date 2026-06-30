"use client";

import { useEffect, useRef } from "react";
import EventCard from "./EventCard";
import { mockEvents, EventData } from "@/lib/mockData";
import { Film, Ticket, Moon } from "lucide-react";

function AutoScrollingRow({ title, icon, events }: { title: string, icon: React.ReactNode, events: EventData[] }) {
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
        {events.map((event) => (
          <div key={event.id} className="shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] snap-start">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedEvents() {
  // Separiamo gli eventi per categoria
  const baseCinema = mockEvents.filter(e => e.categoria === "cinema");
  const baseTeatro = mockEvents.filter(e => e.categoria === "teatro");
  const baseArena = mockEvents.filter(e => e.categoria === "arena");

  // Duplichiamo gli eventi solo per dimostrare l'effetto di scorrimento prolungato (essendoci pochi mock data)
  const cinemaEvents = [...baseCinema, ...baseCinema.map(e => ({ ...e, id: e.id + "_copy" }))];
  const teatroEvents = [...baseTeatro, ...baseTeatro.map(e => ({ ...e, id: e.id + "_copy" }))];
  const arenaEvents = [...baseArena, ...baseArena.map(e => ({ ...e, id: e.id + "_copy" }))];

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
