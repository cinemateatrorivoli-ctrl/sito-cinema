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
  ],
})
