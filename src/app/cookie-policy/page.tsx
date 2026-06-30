import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Cinema Rivoli",
  description: "Informativa sull'uso dei cookie del Cinema Rivoli",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
          Informativa sui Cookie
        </h1>

        <div className="prose prose-invert prose-red max-w-none text-zinc-300">
          <p className="lead text-xl text-zinc-400 mb-8">
            La presente informativa descrive l'utilizzo dei Cookie da parte del sito web del Cinema Rivoli in conformità alle direttive europee e al Provvedimento del Garante per la Protezione dei Dati Personali.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Cosa sono i Cookie?</h2>
          <p>
            I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. I cookie sono essenziali per il corretto funzionamento di Internet e offrono numerosi vantaggi nella fornitura di servizi interattivi.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Quali Cookie utilizziamo e perché</h2>

          <h3 className="text-xl font-bold text-white mt-6 mb-2">A. Cookie Tecnici o Strettamente Necessari</h3>
          <p>
            Il nostro sito web utilizza cookie tecnici strettamente necessari al suo funzionamento. Questi cookie non registrano alcuna informazione personale e vengono utilizzati esclusivamente per garantire all'utente una normale navigazione e fruizione del sito (ad esempio, per ricordare il consenso prestato all'informativa sui cookie o permettere il caricamento rapido delle pagine).
            <br />
            <em>Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti.</em>
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-2">B. Cookie Analitici e di Statistica</h3>
          <p>
            Utilizziamo servizi di statistica di terze parti (come Google Analytics) per raccogliere informazioni in forma aggregata e totalmente anonimizzata sul numero degli utenti e su come questi visitano il sito stesso. Poiché i dati vengono anonimizzati mascherando porzioni dell'indirizzo IP, tali cookie sono assimilabili ai cookie tecnici.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-2">C. Cookie di Terze Parti e Contenuti Incorporati</h3>
          <p>
            Il sito può incorporare elementi forniti da terze parti. Tali servizi possono impostare cookie per funzionare correttamente. Nello specifico:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>YouTube:</strong> per l'incorporamento dei trailer e dei contenuti video. I cookie vengono attivati solo se l'utente sceglie di riprodurre il video.</li>
            <li><strong>Google Maps:</strong> per l'incorporamento della mappa interattiva utile a localizzare la nostra sede.</li>
          </ul>
          <p>
            Il Titolare non ha accesso ai dati raccolti in autonomia da tali terze parti. Ti invitiamo a prendere visione delle informative sulla privacy di Google per comprendere il loro utilizzo dei cookie.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Gestione e Disabilitazione dei Cookie</h2>
          <p>
            L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. Attenzione: la disabilitazione totale o parziale dei cookie tecnici può compromettere l'utilizzo di alcune funzionalità del sito.
          </p>
          <p>
            Di seguito i link alle istruzioni per i browser più comuni:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">Microsoft Edge</a></li>
          </ul>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl mt-12">
            <p className="text-sm text-zinc-400 m-0">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
