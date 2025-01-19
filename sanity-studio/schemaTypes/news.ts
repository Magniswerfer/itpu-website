export const news = {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{type: 'block'}]
      }
    ],
    orderings: [
      {
        title: 'Publication Date, New',
        name: 'publishedAtDesc',
        by: [
          {field: 'publishedAt', direction: 'desc'}
        ]
      }
    ]
  }