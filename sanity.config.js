import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {CgCoffee} from 'react-icons/cg'
import {
  StarIcon,
  HomeIcon,
  CalendarIcon,
  ColorWheelIcon,
  BookIcon,
  UsersIcon,
  HeartIcon,
} from '@sanity/icons'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['home', 'about', 'cafe', 'event'])

export default defineConfig({
  name: 'default',
  title: 'turnus-backend',

  projectId: 'o9t6todp',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Data')
          .items([
            S.listItem()
              .title('EXHIBITIONS')
              .schemaType('exhibition')
              .icon(BookIcon)
              .child(
                S.documentList()
                  .title('EXHIBITIONS')
                  .filter('_type == "exhibition"')
                  .defaultOrdering([{field: 'startdate', direction: 'desc'}]),
              ),
            S.listItem()
              .title('EVENTS')
              .id('event')
              .icon(CalendarIcon)
              .child(S.document().title('EVENTY').schemaType('event').documentId('event')),
            S.listItem()
              .title('ARTISTS')
              .schemaType('artist')
              .icon(UsersIcon)
              .child(
                S.documentList()
                  .title('ARTISTS')
                  .filter('_type == "artist"')
                  .defaultOrdering([{field: 'year', direction: 'desc'}]),
              ),
            S.divider(),
            S.listItem()
              .title('HOME')
              .id('home')
              .icon(HomeIcon)
              .child(S.document().title('HOME').schemaType('home').documentId('home')),
            S.listItem()
              .title('CAFE')
              .id('cafe')
              .icon(CgCoffee)
              .child(S.document().title('CAFE').schemaType('cafe').documentId('cafe')),
            S.listItem()
              .title('ABOUT')
              .id('about')
              .icon(StarIcon)
              .child(S.document().title('ABOUT').schemaType('about').documentId('about')),
          ]),
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,

    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
