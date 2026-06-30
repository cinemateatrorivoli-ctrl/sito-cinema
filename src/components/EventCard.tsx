"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function EventCard({ event }: { event: any }) {
  const id = event.slug || event._id || event.id;
  const title = event.title || event.titolo;
  const category = event.category || event.categoria;
  const imageUrl = event.imageUrl || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop";
  const description = event.description || event.descrizioneBreve;
  const showtimes = Array.isArray(event.showtimes) ? event.showtimes.join(" - ") : (event.showtimes || event.orari || "In aggiornamento");

  return (
    <Link href={`/eventi/${id}`} className="block h-full cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group flex flex-col bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors h-full"
      >
        <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="mb-2 uppercase tracking-widest text-xs font-bold text-red-500">
            {category}
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 grow line-clamp-3">
            {description}
          </p>

          <div className="flex items-center space-x-2 text-sm text-zinc-300 font-medium bg-zinc-950 p-3 rounded-lg border border-zinc-800 mt-auto">
            <Clock className="h-4 w-4 text-red-500 shrink-0" />
            <span className="truncate">{showtimes}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
