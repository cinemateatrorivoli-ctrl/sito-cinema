import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Impostazioni Sito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Sito',
      type: 'string',
      initialValue: 'Impostazioni Generali',
      hidden: true,
    }),
    defineField({
      name: 'cinemaPrices',
      title: 'Prezzi Cinema',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Etichetta (es. Intero, Ridotto)' },
            { name: 'price', type: 'number', title: 'Prezzo (€)' }
          ]
        }
      ]
    }),
    defineField({
      name: 'teatroPrices',
      title: 'Prezzi Teatro',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Etichetta (es. Platea, Galleria)' },
            { name: 'price', type: 'number', title: 'Prezzo (€)' }
          ]
        }
      ]
    }),
    defineField({
      name: 'arenaPrices',
      title: 'Prezzi Arena',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Etichetta (es. Posto Unico)' },
            { name: 'price', type: 'number', title: 'Prezzo (€)' }
          ]
        }
      ]
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numero di Telefono Principale',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Indirizzo Email',
      type: 'string',
    }),
    defineField({
      name: 'cinemaHours',
      title: 'Orari di Apertura Cinema',
      type: 'string',
    }),
    defineField({
      name: 'teatroHours',
      title: 'Orari di Apertura Teatro',
      type: 'string',
    }),
    defineField({
      name: 'arenaHours',
      title: 'Orari di Apertura Arena',
      type: 'string',
    }),
    defineField({
      name: 'heroEvents',
      title: 'Eventi in Copertina (Home Page)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'event' }] }],
      description: 'Seleziona uno o più eventi da mostrare in grande nella Home Page. Verrà creato un carosello automatico. Se vuoto, verrà mostrato un carosello generico.',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Link Pagina Facebook',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Link Pagina Instagram',
      type: 'url',
    }),
    defineField({
      name: 'privacyPolicyText',
      title: 'Testo Privacy Policy',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cookiePolicyText',
      title: 'Testo Cookie Policy',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'sponsorLogos',
      title: 'Loghi Bandi / Contributi / Sponsor',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Aggiungi i loghi degli sponsor o dei bandi da mostrare nel piè di pagina del sito.',
    }),
  ],
})
