import { type SchemaTypeDefinition } from 'sanity'
import hero from './schemas/Hero'
import about from './schemas/about'
import events from './schemas/events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, events],
}
