import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero', 
  title: 'Hero (Header)', 
  type: 'document', 
  fields: [
    defineField({
      name: 'left', 
      type: 'object', 
      title: 'Left Text', 
      fields: [
        defineField({
          name: 'title', 
          type: 'string', 
          title: 'Main title (Company name)'
        }), 
        defineField({
          name: 'tString', 
          type: 'string', 
          title: 'Text (Top left)'
        }), 
        defineField({
          name: 'bString', 
          type: 'string', 
          title: 'Text (Bottom left)'
        }), 
      ]
    }), 
    defineField({
      name: 'right', 
      type: 'object', 
      title: 'Right Text', 
      fields: [
        defineField({
          name: 'desc', 
          type: 'string', 
          title: 'Text (Right side)'
        })
      ]
    })
  ]
})