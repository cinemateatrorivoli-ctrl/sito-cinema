"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=2000", // Luce proiettore
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2000&exp=25&bri=15", // Poltrone cinema/teatro
  "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=2000", // Arena estiva/Outdoor cinema
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia immagine ogni 5 secondi

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Background Cinema"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
            animate={{ opacity: 0.7, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Vivi l'emozione dello spettacolo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Il grande cinema, la magia del teatro e le notti d'estate nella nostra arena all'aperto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cinema"
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-transform hover:scale-105"
          >
            Vai al Cinema
          </Link>
          <Link
            href="/teatro"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-full font-semibold transition-transform hover:scale-105"
          >
            Vai al Teatro
          </Link>
          <Link
            href="/arena"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-full font-semibold transition-transform hover:scale-105"
          >
            Vai all'Arena
          </Link>
        </div>
      </div>
    </section>
  );
}
