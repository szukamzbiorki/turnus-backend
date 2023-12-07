import {StringIcon, TextIcon, ImageIcon, ImagesIcon} from '@sanity/icons'

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...'
  } else {
    return str
  }
}

export default {
  name: 'blocks',
  type: 'array',
  title: 'Blocks',
  group: 'content',
  options: {
    sortable: true,
  },
  of: [
    {
      name: 'bigtext',
      title: 'Text [Big]',
      type: 'object',
      icon: TextIcon,
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
          name: 'content',
          type: 'text',
          title: 'Content',
        },
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'title',
          content: 'content',
          font: 'font',
        },
        prepare(selection) {
          const {title, content, font} = selection
          return {
            title: 'Text [Big]',
            subtitle: font.toUpperCase() + ' ' + truncateString(content, 50),
            media: TextIcon,
          }
        },
      },
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
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
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
      name: 'bigimg',
      title: 'Image [Single]',
      type: 'object',
      icon: ImageIcon,
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
          ],
        },
        {
          name: 'size',
          type: 'string',
          title: 'Size',
          options: {
            list: ['S', 'M', 'L'],
            layout: 'radio',
          },
        },
        {
          name: 'credit',
          type: 'string',
          title: 'Credit',
          description: 'Na przyklad: "Fotografia by: teniten"',
        },
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          images: 'images',
        },
        prepare(selection) {
          const {images} = selection
          return {
            title: 'Image [Single]',
            subtitle: 'number of photos:' + images.length,
            media: images[0],
          }
        },
      },
    },
    {
      name: 'bigimgmedium',
      title: 'Image [Meta]',
      type: 'object',
      icon: ImageIcon,
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'medium',
          type: 'string',
          title: 'Medium',
        },
        {
          name: 'sentence',
          type: 'text',
          title: 'Sentence',
        },
        {
          title: 'Alignment',
          name: 'align',
          type: 'string',
          options: {
            list: ['left', 'right'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          image: 'image',
          title: 'sentence',
        },
        prepare(selection) {
          const {image, title} = selection
          return {
            title: 'Image [Meta]',
            subtitle: title,
            media: image,
          }
        },
      },
    },
    {
      name: 'row',
      title: 'Image [Row]',
      type: 'object',
      icon: ImagesIcon,
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              fields: [
                {
                  name: 'author',
                  type: 'string',
                  title: 'Author',
                },
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'medium',
                  type: 'string',
                  title: 'Medium',
                },
                {
                  name: 'price',
                  type: 'string',
                  title: 'Price',
                },
              ],
            },
          ],
        },
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          images: 'images',
        },
        prepare(selection) {
          const {images} = selection
          return {
            title: 'Image [Row]',
            subtitle: 'number of photos:' + images.length,
            media: images[0],
          }
        },
      },
    },
    {
      name: 'carousel',
      title: 'Image [Carousel]',
      type: 'object',
      icon: ImagesIcon,
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
          ],
        },
        {
          name: 'space',
          type: 'string',
          title: 'Space Below',
          options: {
            list: ['0', 'S', 'M', 'L', 'XL'],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          images: 'images',
        },
        prepare(selection) {
          const {images} = selection
          return {
            title: 'Image [Carousel]',
            subtitle: 'number of photos:' + images.length,
            media: images[0],
          }
        },
      },
    },
  ],
}
