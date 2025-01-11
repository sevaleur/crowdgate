import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about', 
  type: 'document', 
  title: 'About', 
  fields: [
    defineField({
      name: 'grid', 
      type: 'array',
      title: 'Grid', 
      validation: Rule => Rule.max(6).min(6).unique(),
      of: [
        defineField({
          name: 'object', 
          type: 'object', 
          title: 'object', 
          fields: [
            defineField({
              name: 'title', 
              type: 'string', 
              title: 'Title (Big)'
            }), 
            defineField({
              name: 'desc', 
              type: 'string', 
              title: 'Text (Small)'
            }), 
            defineField({
              name: 'image', 
              type: 'image', 
              title: 'Image', 
              fields: [
                defineField({
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                })
              ]
            }),
            defineField({
              name: 'spareImage', 
              type: 'image', 
              title: 'Image (Spare)', 
              fields: [
                defineField({
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})