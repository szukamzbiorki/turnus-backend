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
      name: 'bigimg',
      type: 'image',
      title: 'Big Image',
      validation: (Rule) => Rule.required(),
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
          title: 'Font',
          name: 'font',
          type: 'string',
          options: {
            list: ['helvetica', 'times'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Alignment',
          name: 'align',
          type: 'string',
          options: {
            list: ['left', 'middle', 'right'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
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
          title: 'title',
          contentblocks: 'contentblocks',
          font: 'font',
        },
        prepare(selection) {
          const {title, contentblocks, font} = selection
          return {
            title: 'Text [Small]',
            subtitle: font.toUpperCase() + ' ' + truncateString(contentblocks[0].content, 30),
            media: StringIcon,
          }
        },
      },
    },
    {
      name: 'adres',
      type: 'text',
      title: 'Adres',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactinfo',
      type: 'array',
      title: 'Contact',
      of: [
        {
          name: 'contactentry',
          type: 'object',
          title: 'Contact method',
          preview: {
            select: {
              contactmethod: 'contactmethod',
              contactdata: 'contactdata',
            },
            prepare(selection) {
              const {contactmethod, contactdata} = selection
              return {
                title: contactmethod,
                subtitle: contactdata,
              }
            },
          },
          fields: [
            {
              name: 'contactmethod',
              type: 'string',
              title: 'Contact Method',
            },
            {
              name: 'contactdata',
              type: 'string',
              title: 'Contact Data',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'openalert',
      type: 'string',
      title: 'Alert about opening',
    },
    {
      name: 'open',
      type: 'array',
      title: 'Opening hours',
      of: [
        {
          name: 'zakres',
          type: 'object',
          title: 'Zakres',
          preview: {
            select: {
              day: 'day',
              time: 'time',
            },
            prepare(selection) {
              const {day, time} = selection
              return {
                title: day,
                subtitle: time,
              }
            },
          },
          fields: [
            {
              name: 'day',
              type: 'string',
              title: 'Day',
            },
            {
              name: 'time',
              type: 'string',
              title: 'Time',
            },
          ],
        },
      ],
    },
  ],
}
