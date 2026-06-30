import { type SchemaTypeDefinition } from 'sanity'
import event from './schemas/event'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, settings],
}
