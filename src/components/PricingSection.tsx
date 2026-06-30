import { Film, Ticket, Moon } from "lucide-react";

const pricingData = [
  {
    title: "Cinema",
    icon: <Film className="w-8 h-8 text-red-500 mb-4" />,
    description: "Le migliori pellicole del momento con audio e video di ultima generazione.",
    prices: [
      { label: "Pomeridiano (fino alle 19:00)", value: "€ 6.50" },
      { label: "Serale (dopo le 19:00)", value: "€ 8.50" },
      { label: "Ridotto (Under 12 / Over 65)", value: "€ 5.50" },
    ],
  },
  {
    title: "Teatro",
    icon: <Ticket className="w-8 h-8 text-red-500 mb-4" />,
    description: "Prosa, musical e spettacoli dal vivo con i migliori artisti nazionali.",
    prices: [
      { label: "Platea", value: "€ 25.00" },
      { label: "Galleria", value: "€ 18.00" },
      { label: "Ridotto Studenti", value: "€ 15.00" },
    ],
  },
  {
    title: "Arena",
    icon: <Moon className="w-8 h-8 text-red-500 mb-4" />,
    description: "Cinema all'aperto sotto le stelle durante le calde serate estive.",
    prices: [
      { label: "Ingresso Unico", value: "€ 7.00" },
      { label: "Ridotto Bambini", value: "€ 5.00" },
      { label: "Abbonamento 10 Ingressi", value: "€ 50.00" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="prezzi" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">I Nostri Prezzi</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tariffe trasparenti per ogni tua esigenza di intrattenimento. Consulta i prezzi per gli spettacoli di Cinema, Teatro e per la nostra Arena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-red-600/50 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center mb-8 border-b border-zinc-800 pb-8">
                {plan.icon}
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-6">
                {plan.prices.map((priceItem, pIndex) => (
                  <li key={pIndex} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-medium">{priceItem.label}</span>
                    <span className="text-white font-bold text-lg">{priceItem.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            * I prezzi possono subire variazioni per eventi speciali o prime visioni. Per i biglietti teatrali si consiglia la prenotazione anticipata.
          </p>
        </div>
      </div>
    </section>
  );
}
