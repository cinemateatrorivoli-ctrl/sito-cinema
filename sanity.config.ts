import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { itITLocale } from '@sanity/locale-it-it'
import { schema } from './src/sanity/schema'
import { projectId, dataset } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    itITLocale(),
    deskTool({
      structure: (S) =>
        S.list()
          .title('Cinema Rivoli')
          .items([
            S.listItem()
              .title('Impostazioni Sito')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['settings'].includes(listItem.getId() as string)
            ),
          ]),
    }),
  ],
})
