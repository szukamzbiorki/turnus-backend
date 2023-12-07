import getSlug from 'speakingurl'

export default {
  name: 'exhibition',
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
  preview: {
    select: {
      title: 'title',
      startdate: 'startdate',
      enddate: 'enddate',
      bigimg: 'bigimg',
      type: 'type',
      show: 'show',
    },
    prepare(selection) {
      const {title, startdate, enddate, bigimg, show, type} = selection
      const startdatevar = new Date(startdate)
      const enddatevar = new Date(enddate)
      const start = startdatevar.getDate() + '/' + (startdatevar.getMonth() + 1)
      const end = enddatevar.getDate() + '/' + (enddatevar.getMonth() + 1)
      return {
        title: title,
        subtitle:
          show == true
            ? `🟢 ${start + '-' + end} ${type.toUpperCase()}`
            : `🔴 ${start + '-' + end} ${type.toUpperCase()}`,
        media: bigimg,
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (_, context) => context.parent.title,
        slugify: (input) =>
          getSlug(input, {
            mark: true,
            truncate: 65,
          }),
      },
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bigimage',
      type: 'image',
      title: 'Big Image',
      group: 'meta',
      options: {
        hotspot: true,
        metadata: ['palette'],
      },
    },
    {
      name: 'startdate',
      type: 'date',
      title: 'Start Date',
      description: 'based on this date the exhibitions will be ordered',
      group: 'meta',
    },
    {
      name: 'enddate',
      type: 'date',
      title: 'End Date',
      group: 'meta',
    },
    {
      name: 'place',
      type: 'string',
      title: 'Place',
      group: 'meta',
    },
    {
      name: 'credits',
      type: 'array',
      title: 'Credits',
      group: 'contributors',
      of: [
        {
          name: 'section',
          type: 'object',
          title: 'Artists',
          fields: [
            {
              name: 'sectionname',
              type: 'string',
              description: 'na przyklad:"ARTISTS", albo "SPECIAL THANKS" ',
            },
            {
              name: 'names',
              type: 'string',
              title: 'Names',
            },
          ],
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      group: 'content',
    },
    {
      title: 'Year',
      name: 'year',
      type: 'slug',
      options: {
        source: (_, context) => {
          const date = new Date(_.startdate)
          const year = date.getFullYear().toString()
          console.log(year)
          return year
        },
      },
    },
  ],
}
