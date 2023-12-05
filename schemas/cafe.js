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
      title: 'Title',
      name: 'title',
      type: 'string',
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
    {
      title: 'Sticker',
      name: 'sticker',
      type: 'object',
      group: 'sticker',
      fields: [
        {
          type: 'boolean',
          name: 'display',
        },
        {
          type: 'string',
          name: 'title',
        },
        {
          type: 'image',
          name: 'image',
        },
        {
          type: 'color',
          name: 'color',
          options: {
            disableAlpha: true,
          },
        },
      ],
    },
  ],
}
