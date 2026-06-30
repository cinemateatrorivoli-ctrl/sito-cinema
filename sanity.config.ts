import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from './src/sanity/schema'
import { projectId, dataset } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
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
