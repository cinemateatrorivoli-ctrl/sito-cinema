"use client";

import { Phone, MapPin, ExternalLink } from "lucide-react";

const locations = [
  {
    id: "cinema",
    title: "Cinema Rivoli",
    address: "Via Nicolo Tortorici, 6, 91026 Mazara del Vallo TP",
    mapUrl: "https://maps.google.com/maps?q=Via+Nicolo+Tortorici,+6,+91026+Mazara+del+Vallo+TP&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "teatro",
    title: "Teatro",
    address: "Via Nicolo Tortorici, 6, 91026 Mazara del Vallo TP",
    mapUrl: "https://maps.google.com/maps?q=Via+Nicolo+Tortorici,+6,+91026+Mazara+del+Vallo+TP&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "arena",
    title: "Arena",
    address: "Via Nicolo Tortorici, 6, 91026 Mazara del Vallo TP",
    mapUrl: "https://maps.google.com/maps?q=Via+Nicolo+Tortorici,+6,+91026+Mazara+del+Vallo+TP&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export default function MapSection() {
  return (
    <section id="contatti" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intestazione */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">Le Nostre Sedi</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Il mondo Rivoli si divide in tre grandi spazi per offrirti sempre l'esperienza migliore.
            Scopri come raggiungerci.
          </p>

          <div className="inline-flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 pr-8 rounded-full">
            <div className="bg-red-600 p-3 rounded-full">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Info e Prenotazioni</p>
              <a href="tel:+390923941021" className="text-lg font-bold text-white hover:text-red-500 transition-colors">
                0923 941021
              </a>
            </div>
          </div>
        </div>

        {/* Griglia delle Mappe (3 Colonne) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-zinc-700 transition-colors">

              {/* Info Sede */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-3 flex items-center justify-between">
                  {loc.title}
                  <a
                    href={loc.mapUrl.replace('output=embed', '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-red-500 transition-colors"
                    title="Apri in Google Maps"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </h3>
                <div className="flex items-start gap-2 text-zinc-400 text-sm">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
              </div>

              {/* Mappa */}
              <div className="relative h-[250px] w-full border-t border-zinc-900">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
