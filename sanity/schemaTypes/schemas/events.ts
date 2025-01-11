import { defineType, defineField } from "sanity";

export default defineType({
  name: 'events', 
  type: 'document', 
  title: 'Events', 
  fields: [
    defineField({
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }), 
    defineField({
      name: 'eventsArray', 
      type: 'array', 
      title: 'Events list', 
      validation: Rule => Rule.min(4).unique(), 
      of: [
        defineField({
          name: 'event', 
          type: 'object', 
          title: 'Event', 
          fields: [
            defineField({
              name: 'category', 
              type: 'string', 
              title: 'Category'
            }), 
            defineField({
              name: 'title', 
              type: 'string', 
              title: 'Title'
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
            })
          ]
        })
      ]
    })
  ]
})