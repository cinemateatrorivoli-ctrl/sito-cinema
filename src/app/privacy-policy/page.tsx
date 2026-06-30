import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Cinema Rivoli",
  description: "Informativa sul trattamento dei dati personali del Cinema Rivoli",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
          Informativa sulla Privacy
        </h1>

        <div className="prose prose-invert prose-red max-w-none text-zinc-300">
          <p className="lead text-xl text-zinc-400 mb-8">
            Informativa resa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) per gli utenti che consultano il sito web del Cinema Rivoli.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali è il <strong>Cinema Rivoli</strong>, con sede legale e operativa in Via Nicolo Tortorici, 6 - 91026 Mazara del Vallo (TP). <br />
            Telefono: 0923 941021.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Tipologia di Dati Trattati e Finalità del Trattamento</h2>
          <p>
            Durante la navigazione e l'utilizzo del sito web, il Titolare può raccogliere e trattare le seguenti categorie di dati:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, nomi a dominio dei computer). Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento. Base giuridica: <em>legittimo interesse del Titolare</em>.
            </li>
            <li>
              <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito o le comunicazioni via telefono comportano la successiva acquisizione dell'indirizzo e dei recapiti del mittente, necessari per rispondere alle richieste. Base giuridica: <em>esecuzione di misure precontrattuali o contrattuali</em>.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Modalità del Trattamento e Conservazione</h2>
          <p>
            Il trattamento dei dati personali è realizzato per mezzo delle operazioni indicate all'art. 4 n. 2) GDPR. I dati personali sono sottoposti a trattamento prevalentemente informatico e automatizzato, nel pieno rispetto delle misure di sicurezza adeguate a prevenire la perdita dei dati, usi illeciti o non corretti e accessi non autorizzati.
          </p>
          <p>
            I dati forniti dall'utente saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti e, in ogni caso, in conformità con i termini di legge previsti.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Comunicazione e Diffusione dei Dati</h2>
          <p>
            I dati personali raccolti non saranno in alcun modo diffusi. Potranno essere comunicati a soggetti terzi (ad es. fornitori di servizi tecnici terzi, hosting provider, società informatiche) nominati, se necessario, Responsabili del Trattamento da parte del Titolare per compiti di natura strettamente tecnica e organizzativa legati al funzionamento del sito.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Diritti dell'Interessato</h2>
          <p>
            Nella Sua qualità di interessato, l'utente possiede i diritti di cui agli artt. 15-22 del GDPR. In particolare, ha il diritto di:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano e chiederne l'accesso;</li>
            <li>Ottenere la rettifica, la cancellazione (diritto all'oblio) o la limitazione del trattamento;</li>
            <li>Opporsi in tutto o in parte al trattamento per motivi legittimi;</li>
            <li>Richiedere la portabilità dei dati.</li>
          </ul>
          <p>
            Per l'esercizio dei propri diritti, l'utente può contattare in qualsiasi momento il Titolare inviando una comunicazione scritta alla sede del Cinema Rivoli oppure telefonando al numero indicato nei contatti.
          </p>

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
