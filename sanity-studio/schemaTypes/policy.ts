export const policy = {
    name: 'policy',
    title: 'Policy Position',
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
        }
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Privacy', value: 'privacy'},
            {title: 'Security', value: 'security'},
            {title: 'Digital Rights', value: 'digital-rights'},
            {title: 'Infrastructure', value: 'infrastructure'},
            {title: 'Other', value: 'other'}
          ]
        }
      }
    ]
  }