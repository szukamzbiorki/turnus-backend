export default {
  name: 'event',
  type: 'document',
  title: 'EVENTS',
  icon: null,
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
  preview: {
    select: {
      title: 'title',
      date: 'date',
      type: 'type',
      show: 'show',
    },
    prepare(selection) {
      const {title, date, bigimg, show, type} = selection
      const datevar = new Date(date)
      const dateoutput = datevar.getDate() + '/' + (datevar.getMonth() + 1)
      return {
        title: title,
        subtitle:
          show == true
            ? `🟢 ${dateoutput} ${type.toUpperCase()}`
            : `🔴 ${dateoutput} ${type.toUpperCase()}`,
      }
    },
  },
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },
    {
      title: 'Show',
      name: 'show',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },
    {
      title: 'Godzina',
      name: 'hour',
      type: 'string',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      group: 'meta',
    },
    {
      name: 'place',
      type: 'string',
      title: 'Place',
      group: 'meta',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      group: 'meta',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      group: 'meta',
    },
  ],
}
