export default {
  name: 'event',
  type: 'document',
  title: 'EXHIBITION',
  groups: [
    {
      name: 'meta',
      title: 'META',
    },
    {
      name: 'contributors',
      title: 'CONTRIBUTORS',
    },
    {
      name: 'content',
      title: 'BLOCKS',
    },
  ],

  fields: [
    {
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['palette'],
          },
          fields: [{name: 'caption', type: 'string'}],
        },
      ],
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      type: 'array',
      name: 'events',
      of: [
        {
          type: 'object',
          name: 'el',
          preview: {
            select: {
              title: 'title',
              date: 'date',
              show: 'show',
              hour: 'hour',
            },
            prepare(selection) {
              const {title, date, show, hour} = selection
              const datevar = new Date(date)
              const newdate = datevar.getDate() + '/' + (datevar.getMonth() + 1)
              return {
                title: newdate + ' ' + hour,
                subtitle: show == true ? `🟢 ${title}` : `🔴 ${title}`,
              }
            },
          },
          fieldsets: [
            {
              name: 'tickets',
              title: 'Tickets',
              description: 'Leave empty if no tickets',
              options: {
                columns: 2,
              },
            },
          ],
          fields: [
            {
              title: 'Show',
              name: 'show',
              type: 'boolean',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              type: 'date',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'hour',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'desc',
              type: 'text',
              title: 'Short description',
            },
            {
              name: 'link',
              type: 'url',
            },
            {
              name: 'place',
              type: 'string',
              description: 'Leave empty if no place',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
              fieldset: 'tickets',
            },
            {
              name: 'ticketslink',
              type: 'url',
              title: 'Link',
              fieldset: 'tickets',
            },
          ],
        },
      ],
    },
  ],
}
