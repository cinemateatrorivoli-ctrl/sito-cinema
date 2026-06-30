import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Evento (Film/Spettacolo)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Cinema', value: 'cinema' },
          { title: 'Teatro', value: 'teatro' },
          { title: 'Arena', value: 'arena' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Locandina',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione Breve',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'plot',
      title: 'Trama Completa',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'showtimes',
      title: 'Orari di Programmazione',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Es. "18:30", "21:00"',
    }),
    defineField({
      name: 'director',
      title: 'Regista',
      type: 'string',
    }),
    defineField({
      name: 'cast',
      title: 'Cast',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Durata (minuti)',
      type: 'number',
    }),
    defineField({
      name: 'trailerUrl',
      title: 'Link Trailer (YouTube)',
      type: 'url',
    }),
  ],
})
