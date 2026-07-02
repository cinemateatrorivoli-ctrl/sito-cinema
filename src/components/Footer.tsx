import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { getSettingsQuery } from "@/sanity/lib/queries";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default async function Footer() {
  const settings = await client.fetch(getSettingsQuery);
  const phoneNumber = settings?.phoneNumber || "0923 941021";
  const cinemaHours = settings?.cinemaHours || "In aggiornamento";
  const teatroHours = settings?.teatroHours || "In aggiornamento";
  const arenaHours = settings?.arenaHours || "In aggiornamento";

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity py-2">
              <img src="/logo_white.png" alt="Cinema Rivoli" className="h-16 w-auto object-contain" />
            </Link>
            <p className="mb-4 max-w-sm">
              Il tuo multisala di fiducia. Cinema, teatro e arena in un unico luogo, per regalarti emozioni tutto l'anno.
            </p>
            <div className="flex space-x-6">
              {settings?.facebookUrl && (
                <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="h-6 w-6" />
                </a>
              )}
              {settings?.instagramUrl && (
                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-4 text-lg">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <span>Via Nicolo Tortorici, 6<br />91026 Mazara del Vallo (TP)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </li>
              <li className="text-zinc-400 mt-4">
                P.IVA {settings?.vatNumber || "01234567890"}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-4 text-lg">Orari di Apertura</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Cinema</strong>
                  <span>{cinemaHours}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Teatro</strong>
                  <span>{teatroHours}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Arena</strong>
                  <span>{arenaHours}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold font-heading mb-4 text-lg">Trasparenza</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              {((settings?.sponsorLogos && settings.sponsorLogos.length > 0) || (settings?.sponsorTexts && settings.sponsorTexts.length > 0)) && (
                <li>
                  <Link href="/contributi" className="hover:text-white transition-colors">Bandi e Contributi Pubblici</Link>
                </li>
              )}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-sm flex flex-col md:flex-row justify-between items-center text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Cinema Rivoli. Tutti i diritti riservati.</p>
          <Link href="/studio" className="hover:text-zinc-400 transition-colors mt-4 md:mt-0">
            Area Gestori
          </Link>
        </div>
      </div>
    </footer>
  );
}
