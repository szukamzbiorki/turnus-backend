import {StringIcon} from '@sanity/icons'

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...'
  } else {
    return str
  }
}

export default {
  name: 'about',
  type: 'document',
  title: 'ABOUT',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagetwo',
      type: 'image',
      title: 'Image',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'introduction',
      type: 'text',
      title: 'Introduction',
      description: 'pierwszy duzy akapit',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'smalltext',
      title: 'Text [Small]',
      type: 'object',
      icon: StringIcon,
      fields: [
        {
          name: 'contentblocks',
          type: 'array',
          of: [
            {
              name: 'textblock',
              type: 'object',
              fields: [
                {
                  name: 'content',
                  type: 'text',
                  title: 'Content',
                },
              ],
              preview: {
                select: {
                  content: 'content',
                },
                prepare(selection) {
                  const {content} = selection
                  return {
                    title: 'Text [Small]',
                    subtitle: truncateString(content, 30),
                    media: StringIcon,
                  }
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          contentblocks: 'contentblocks',
        },
        prepare(selection) {
          const {contentblocks} = selection
          return {
            title: 'Text [Small]',
            subtitle: truncateString(contentblocks[0].content, 30),
            media: StringIcon,
          }
        },
      },
    },
    {
      name: 'partnerstext',
      type: 'text',
      title: 'Partners Text',
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Our Partners',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'about',
              type: 'text',
            },
            {
              name: 'url',
              type: 'url',
            },
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
                metadata: ['palette'],
              },
            },
          ],
        },
      ],
    },
    {type: 'text', name: 'names', title: 'Imiona kolaboratorów'},
  ],
}
