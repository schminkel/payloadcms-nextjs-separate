import type {GlobalConfig} from 'payload/types'


export const Home: GlobalConfig = {
  label: "Home",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'FirstLogo',
      label: 'First Logo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'SecondLogo',
      label: 'Second Logo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'Text',
      label: 'Text',
      type: 'text',
      required: false,
    },
  ],
  slug: 'home',
}
