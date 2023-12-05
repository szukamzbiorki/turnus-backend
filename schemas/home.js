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
      title: 'Background Color',
      name: 'bgcol',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      group: 'style',
    },
    {
      title: 'Type Color',
      name: 'typecol',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      group: 'style',
    },
    {
      title: 'Secondary Type Color',
      name: 'sectypecol',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      group: 'style',
    },
    {
      name: 'bannertop',
      title: 'Banner Top',
      type: 'object',
      fields: [
        {
          name: 'show',
          type: 'boolean',
        },
        {
          name: 'image',
          type: 'image',
          description: 'horizontally long image',
        },
        {
          name: 'imagemobile',
          type: 'image',
          description: 'closer to square size',
        },
        {
          name: 'link',
          type: 'url',
        },
        {
          name: 'text',
          description: 'alt text',
          type: 'string',
        },
      ],
      group: 'banners',
    },
    {
      name: 'bannerbot',
      title: 'Banner Bottom',
      type: 'object',
      fields: [
        {
          name: 'show',
          type: 'boolean',
        },
        {
          name: 'image',
          type: 'image',
          description: 'horizontally long image',
        },
        {
          name: 'imagemobile',
          type: 'image',
          description: 'closer to square size',
        },
        {
          name: 'link',
          type: 'url',
        },
        {
          name: 'text',
          description: 'alt text',
          type: 'string',
        },
      ],
      group: 'banners',
    },
    {
      name: 'newssection',
      type: 'array',
      of: [
        {
          name: 'newsimage',
          type: 'image',
        },
      ],
      group: 'news',
    },
  ],
}
