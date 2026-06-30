export type EventCategory = 'cinema' | 'teatro' | 'arena';

export interface EventData {
  id: string;
  titolo: string;
  imageUrl: string;
  categoria: EventCategory;
  descrizioneBreve: string;
  orari: string;
  descrizioneLunga?: string;
  regista?: string;
  cast?: string;
  trailerUrl?: string;
}

export const mockEvents: EventData[] = [
  {
    id: '1',
    titolo: 'Inception',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    categoria: 'cinema',
    descrizioneBreve: 'Un ladro che ruba segreti corporativi attraverso l\'uso della tecnologia di condivisione dei sogni, riceve il compito inverso di piantare un\'idea.',
    orari: '18:30 - 21:00',
    descrizioneLunga: 'Dom Cobb è un abilissimo ladro, il migliore in assoluto in un\'arte molto pericolosa: l\'estrazione. Ovvero il furto di preziosi segreti dal profondo del subconscio umano durante lo stato onirico, quando la mente è più vulnerabile. La sua rara abilità ha fatto di lui un professionista molto ricercato nel pericoloso mondo dello spionaggio industriale, ma lo ha anche reso un fuggitivo e gli ha fatto perdere tutto ciò che ha mai amato. Adesso a Cobb è stata offerta un\'occasione per redimersi. L\'ultimo lavoro potrebbe ridargli la sua vita, ma solo se riuscirà a realizzare l\'impossibile: l\'innesto.',
    regista: 'Christopher Nolan',
    cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy, Ken Watanabe',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
  {
    id: '2',
    titolo: 'Interstellar',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    categoria: 'cinema',
    descrizioneBreve: 'Una squadra di esploratori viaggia attraverso un wormhole nello spazio nel tentativo di garantire la sopravvivenza dell\'umanità.',
    orari: '19:00 - 22:30',
    descrizioneLunga: 'In un futuro imprecisato, un drastico cambiamento climatico ha colpito duramente l\'agricoltura. Un gruppo di scienziati, sfruttando un cunicolo spazio-temporale, si imbarca in una missione interstellare per cercare una nuova casa per l\'umanità e tentare di salvarla dall\'estinzione. Guidata dall\'ingegnere ed ex-pilota Cooper, l\'astronave Endurance affronta i misteri più oscuri dell\'universo.',
    regista: 'Christopher Nolan',
    cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
  },
  {
    id: '3',
    titolo: 'Il Re Leone - Musical',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
    categoria: 'teatro',
    descrizioneBreve: 'Il celebre spettacolo teatrale che porta in scena le avventure di Simba con scenografie spettacolari.',
    orari: '21:00',
    descrizioneLunga: 'Il musical de Il Re Leone è un\'esperienza immersiva unica. Ispirato al celebre film d\'animazione Disney, questo spettacolo teatrale unisce maschere giganti, marionette mozzafiato e costumi coloratissimi per far prendere vita agli animali della savana africana direttamente sul palcoscenico. Preparati a cantare "Hakuna Matata" e a emozionarti con "Il Cerchio della Vita" in una produzione da record.',
    regista: 'Julie Taymor',
    cast: 'Compagnia Teatrale Italiana',
    trailerUrl: 'https://www.youtube.com/embed/-pgZtzDj_7o',
  },
  {
    id: '4',
    titolo: 'Romeo e Giulietta',
    imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=800',
    categoria: 'teatro',
    descrizioneBreve: 'La tragedia classica di William Shakespeare portata in scena con un nuovo adattamento.',
    orari: '20:30',
    descrizioneLunga: 'Due grandi famiglie nemiche, i Montecchi e i Capuleti, si fronteggiano nella città di Verona. In questo clima di odio e violenza sboccia, improvviso e travolgente, l\'amore tra il giovane Romeo e la giovanissima Giulietta. Una messa in scena che rispetta la tradizione ma introduce elementi di pura contemporaneità visiva, esplorando l\'amore adolescenziale in tutta la sua forza distruttiva e poetica.',
    regista: 'Franco Zeffirelli (adattamento)',
    cast: 'Attori del Teatro Stabile',
  },
  {
    id: '5',
    titolo: 'Concerto sotto le stelle',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800',
    categoria: 'arena',
    descrizioneBreve: 'Un evento musicale all\'aperto con artisti internazionali.',
    orari: '22:00',
    descrizioneLunga: 'La nostra Arena ospita un concerto indimenticabile sotto il cielo sereno. Artisti internazionali di calibro mondiale si esibiranno con un repertorio pop/rock in un\'atmosfera magica e suggestiva. Food truck, area lounge e ottima musica saranno i veri protagonisti della serata.',
    regista: 'Evento dal vivo',
  },
  {
    id: '6',
    titolo: 'Cinema all\'aperto: Ritorno al Futuro',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
    categoria: 'arena',
    descrizioneBreve: 'Classico appuntamento estivo per godersi i cult anni \'80 sotto le stelle.',
    orari: '21:30',
    descrizioneLunga: 'Niente di meglio che riguardare un cult immortale godendosi l\'aria fresca della nostra Arena estiva. Torna al cinema "Ritorno al Futuro", il capolavoro con Michael J. Fox. Il giovane Marty McFly viaggia accidentalmente indietro nel tempo fino al 1955 a bordo della DeLorean modificata dal suo eccentrico amico scienziato Doc Brown. Lì incontra i suoi futuri genitori da giovani, scatenando una serie di paradossi comici che minacciano la sua stessa esistenza.',
    regista: 'Robert Zemeckis',
    cast: 'Michael J. Fox, Christopher Lloyd, Lea Thompson',
    trailerUrl: 'https://www.youtube.com/embed/qvsgGtivCgs',
  },
];
