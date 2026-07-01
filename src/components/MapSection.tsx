import { Phone, MapPin, ExternalLink } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { getSettingsQuery } from "@/sanity/lib/queries";

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

export default async function MapSection() {
  const settings = await client.fetch(getSettingsQuery);
  const phoneNumber = settings?.phoneNumber || "0923 941021";

  // Associamo dinamicamente gli orari e gli indirizzi alle sedi in base ai dati di Sanity
  const locationsWithHours = locations.map(loc => {
    let hours = "In aggiornamento";
    let address = loc.address;
    let mapUrl = loc.mapUrl;

    if (loc.id === "cinema") {
      hours = settings?.cinemaHours || hours;
      address = settings?.cinemaAddress || address;
      mapUrl = settings?.cinemaMapUrl || mapUrl;
    }
    if (loc.id === "teatro") {
      hours = settings?.teatroHours || hours;
      address = settings?.teatroAddress || address;
      mapUrl = settings?.teatroMapUrl || mapUrl;
    }
    if (loc.id === "arena") {
      hours = settings?.arenaHours || hours;
      address = settings?.arenaAddress || address;
      mapUrl = settings?.arenaMapUrl || mapUrl;
    }

    // Sistema automatico per evitare che la mappa si rompa
    // Se l'utente ha inserito un URL normale invece di quello da incorporare:
    if (mapUrl && !mapUrl.includes("output=embed") && !mapUrl.includes("embed?pb=")) {
      // Usiamo l'indirizzo testuale inserito per generare automaticamente l'URL corretto da incorporare
      mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }

    return { ...loc, hours, address, mapUrl };
  });

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
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-lg font-bold text-white hover:text-red-500 transition-colors">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        {/* Griglia delle Mappe (3 Colonne) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locationsWithHours.map((loc) => (
            <div key={loc.id} className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-zinc-700 transition-colors flex flex-col">

              {/* Info Sede */}
              <div className="p-6 grow">
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
                <div className="flex flex-col gap-3 text-zinc-400 text-sm mt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-2 border-t border-zinc-900 pt-3 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <span className="text-red-500 font-bold text-lg">🕒</span>
                    </div>
                    <span><strong className="text-zinc-300">Orari:</strong> {loc.hours}</span>
                  </div>
                </div>
              </div>

              {/* Mappa */}
              <div className="relative h-[250px] w-full border-t border-zinc-900 mt-auto">
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
