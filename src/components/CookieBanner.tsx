"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già fatto una scelta sui cookie
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Piccolo ritardo per non farlo apparire istantaneamente e spaventare l'utente
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-40 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 group"
        aria-label="Preferenze Cookie"
        title="Impostazioni Cookie"
      >
        <span className="sr-only">Impostazioni Cookie</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 12.5v.01" />
          <path d="M12 16v.01" />
          <path d="M11 12.5v.01" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 p-4 md:p-6 z-50 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <div className="text-zinc-300 text-sm md:text-base pr-8">
          <strong className="text-white block md:inline md:mr-2">Informativa sui Cookie.</strong>
          Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito. Puoi scoprire di più su quali cookie stiamo utilizzando o come disabilitarli leggendo la nostra{" "}
          <Link href="/cookie-policy" className="text-red-500 hover:text-red-400 underline">
            Cookie Policy
          </Link>.
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-700 hover:bg-zinc-800 rounded-xl transition-colors"
          >
            Rifiuta non necessari
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
          >
            Accetta Tutti
          </button>
        </div>

        <button
          onClick={handleDecline}
          className="absolute top-0 right-0 md:-top-2 md:-right-2 text-zinc-500 hover:text-white transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
