export default {
  name: 'cafe',
  type: 'document',
  title: 'CAFE',
  groups: [
    {
      name: 'menu',
      title: 'MENU',
    },
    {
      name: 'sticker',
      title: 'STICKER',
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
      title: 'About',
      name: 'about',
      type: 'text',
    },
    {
      title: 'Opening Hours',
      name: 'hours',
      type: 'text',
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      group: 'menu',
      of: [
        {
          type: 'object',
          name: 'menusection',
          title: 'Menu Section',
          fields: [
            {
              title: 'Section title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Section subtitle',
              name: 'subtitle',
              type: 'string',
            },
            {
              title: 'Positions',
              name: 'positions',
              type: 'array',
              of: [
                {
                  name: 'position',
                  type: 'object',
                  fields: [
                    {
                      title: 'Name',
                      name: 'name',
                      type: 'string',
                    },
                    {
                      title: 'Subtext',
                      name: 'subtext',
                      type: 'string',
                      description: 'like: ingredients, additional information',
                    },
                    {
                      title: 'Price',
                      name: 'price',
                      type: 'string',
                      description: 'just the number in the specified currency',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'currency',
      type: 'string',
      group: 'menu',
    },
  ],
}
