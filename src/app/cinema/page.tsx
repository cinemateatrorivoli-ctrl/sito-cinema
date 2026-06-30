import { mockEvents } from "@/lib/mockData";
import EventCard from "@/components/EventCard";
import { Search } from "lucide-react";

export default function CinemaPage() {
  const cinemaEvents = mockEvents.filter((e) => e.categoria === "cinema");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col mb-12 border-b border-zinc-800 pb-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          Programmazione Cinema
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Scopri i film in sala questa settimana o cerca le prossime uscite in arrivo.
        </p>
      </div>

      <div className="space-y-20">
        {/* Sezione: In Sala */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-white">In Sala</h2>
            <div className="ml-4 grow h-px bg-zinc-800"></div>
          </div>

          {cinemaEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cinemaEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Nessun film in sala</h2>
              <p className="text-zinc-400 text-lg">
                La programmazione è in fase di aggiornamento. Torna presto per scoprire i nuovi film in arrivo!
              </p>
            </div>
          )}
        </section>

        {/* Sezione: Film in Uscita (Ricerca) */}
        <section id="prossimamente">
          <div className="flex items-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-white">Film in Uscita</h2>
            <div className="ml-4 grow h-px bg-zinc-800"></div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Cerca un film in arrivo</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Curioso di scoprire i prossimi titoli? Usa la barra di ricerca qui sotto. Verrai reindirizzato al database di MyMovies per consultare trama e dettagli.
            </p>

            <form
              action="https://www.mymovies.it/ricerca/"
              method="GET"
              target="_blank"
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="relative grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="q"
                  required
                  placeholder="Es: Spider-Man, Il Gladiatore 2..."
                  className="block w-full pl-11 pr-4 py-4 bg-black border border-zinc-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-transform hover:scale-105 shrink-0"
              >
                Cerca
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
