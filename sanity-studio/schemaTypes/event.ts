export const event = {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'startDateTime',
        title: 'Start Date and Time',
        type: 'datetime',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'endDateTime',
        title: 'End Date and Time',
        type: 'datetime'
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'isOnline',
        title: 'Online Event',
        type: 'boolean',
        initialValue: false
      },
      {
        name: 'meetingLink',
        title: 'Meeting Link',
        type: 'url',
        hidden: ({document}: any) => !document?.isOnline
      }
    ]
  }