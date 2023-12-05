import getSlug from 'speakingurl'
export default {
  name: 'artist',
  type: 'document',
  title: 'ARTIST',
  groups: [
    {
      name: 'meta',
      title: 'META',
    },
    {
      name: 'image',
      title: 'IMAGE',
    },
    {
      name: 'content',
      title: 'BLOCKS',
    },
  ],
  fields: [
    {
      title: 'Shape',
      name: 'shape',
      type: 'file',
      group: 'image',
      options: {accept: '.svg'},
      description: 'SVG file only',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      group: 'image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (_, context) => context.parent.name,
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
      name: 'pronouns',
      type: 'string',
      title: 'Pronouns :P',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'birthday',
      type: 'string',
      title: 'Birthday',
      group: 'meta',
      description: 'birthday however specific you want to make it',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'birthplace',
      type: 'string',
      title: 'Birthplace',
      group: 'meta',
      description: 'birthplace (or where youre from I guess) however specific you want to make it',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'social',
      type: 'string',
      title: 'Instagram',
      group: 'meta',
      description: 'nazwa na instagramie, po prostu',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio/Whatever longer text you want to put',
      group: 'meta',
    },
    {
      name: 'expos',
      type: 'array',
      title: 'Past Exhibitions',
      group: 'meta',
      of: [
        {
          name: 'event',
          type: 'document',
          title: 'Event',
          preview: {
            select: {
              place: 'place',
              citycountry: 'citycountry',
              year: 'year',
            },
            prepare(selection) {
              const {place, citycountry, year} = selection
              return {
                title: place,
                subtitle: year + ' ' + citycountry,
              }
            },
          },
          fields: [
            {
              name: 'year',
              type: 'string',
              title: 'Year',
              description: '[year]',
            },
            {
              name: 'place',
              type: 'string',
              title: 'Place',
              description: '[title of expo],[name of establishment of expo]',
            },
            {
              name: 'citycountry',
              type: 'string',
              description: '[City name],[Country 2 letter code]',
              title: 'City + Country',
            },
            {
              name: 'link',
              type: 'string',
              description:
                'A link to where the user can learn more about this instance, if you dont want there to be any link leave empty',
              title: 'Link',
            },
            {
              name: 'external',
              type: 'boolean',
              description:
                'If true, provide a functioning URL starting from "https://", if false, put here the "slug" of a project from the database',
              title: 'If external',
            },
          ],
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      group: 'meta',
      of: [
        {
          name: 'event',
          type: 'document',
          title: 'Event',
          preview: {
            select: {
              place: 'place',
              citycountry: 'citycountry',
              year: 'year',
            },
            prepare(selection) {
              const {place, citycountry, year} = selection
              return {
                title: place,
                subtitle: year + ' ' + citycountry,
              }
            },
          },
          fields: [
            {
              name: 'year',
              type: 'string',
              title: 'Year',
              description: '[year-year]',
            },
            {
              name: 'place',
              type: 'string',
              title: 'Place',
              description: '[name of title(e.g. "Bachelor of Arts")],[name of school without city]',
            },
            {
              name: 'citycountry',
              type: 'string',
              description: '[City name],[Country 2 letter code]',
              title: 'City + Country',
            },

            {
              name: 'link',
              type: 'string',
              description:
                'A link to where the user can learn more about this instance, if you dont want there to be any link leave empty',
              title: 'Link',
            },
            {
              name: 'external',
              type: 'boolean',
              description:
                'If true, provide a functioning URL starting from "https://", if false, put here the "slug" of a project from the database',
              title: 'If external',
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
  ],
}
