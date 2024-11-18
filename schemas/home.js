export default {
  name: 'home',
  type: 'document',
  title: 'HOME',
  groups: [
    {
      name: 'style',
      title: 'STYLE',
    },
    {
      name: 'banners',
      title: 'BANNERS',
    },
    {
      name: 'news',
      title: 'NEWS',
    },
  ],
  fields: [
    {
      title: 'Turnus Logo',
      name: 'logo',
      type: 'image',
      description: 'na codzien normalne, na specjalne okazje mozna podmienic',
      validation: (Rule) => Rule.required(),
      group: 'style',
    },
    {
      name: 'headers',
      type: 'object',
      title: 'Headers',
      fields: [
        {
          name: 'show',
          type: 'boolean',
        },
        {
          name: 'announcements',
          type: 'array',
          description:
            ' | <- ten znak działa jako enter. Żeby lepiej stylizować ten element, bo czasem są problemy z tym jak to wygląda',
          of: [
            {
              name: 'a',
              type: 'string',
            },
          ],
        },
      ],
      group: 'news',
    },
    {
      name: 'featured',
      type: 'reference',
      to: [{type: 'exhibition'}],
    },
    {
      name: 'featuredimages',
      title: 'Featured Images',
      type: 'object',
      fields: [
        {
          name: 'show',
          type: 'boolean',
        },
        {
          name: 'images',
          type: 'array',
          of: [
            {
              name: 'newsimage',
              type: 'image',
            },
          ],
        },
      ],
      group: 'news',
    },

    {
      name: 'sentence',
      title: 'Featured Sentence',
      type: 'object',
      fields: [
        {
          name: 'sentence',
          type: 'string',
        },
        {
          name: 'color',
          type: 'color',
          options: {
            disableAlpha: true,
          },
        },
      ],
      group: 'news',
    },
    {
      name: 'weeks',
      title: 'Weekly Images',
      type: 'array',
      of: [
        {
          name: 'week',
          type: 'object',
          fields: [
            {
              name: 'range',
              title: 'Week range',
              description: 'np. 9.01-16.01',
              type: 'string',
            },
            {
              name: 'description',
              type: 'text',
            },
            {
              type: 'array',
              name: 'images',
              of: [
                {
                  type: 'image',
                  name: 'image',
                },
              ],
            },
          ],
        },
      ],
      group: 'news',
    },
    {
      name: 'newssection',
      type: 'object',
      fields: [
        {
          name: 'show',
          type: 'boolean',
        },
        {
          name: 'news',
          type: 'array',
          of: [
            {
              name: 'newsimage',
              type: 'image',
            },
          ],
        },
      ],
      group: 'news',
    },
  ],
}
