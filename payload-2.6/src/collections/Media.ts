import type { CollectionConfig } from 'payload/types'

import path from 'path'

export const Media: CollectionConfig = {
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    description: 'Media files uploaded to the site.',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    crop: true,
    focalPoint: true,
    mimeTypes: [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'image/gif',
      'image/svg+xml',
      'audio/mpeg',
    ],
    formatOptions: {
      format: 'png',
      options: { quality: 90 },
    },
    imageSizes: [
      {
        name: 'medium',
        width: 1024,
        height: undefined,
        crop: 'center',
        position: 'center',
        formatOptions: { format: 'png', options: { quality: 90 } },
      },
      {
        name: 'tablet',
        width: 640,
        height: 480,
      },
      {
        name: 'mobile',
        width: 320,
        height: 240,
        crop: 'left top',
      },
      {
        name: 'icon',
        width: 16,
        height: 16,
      },
    ],
  },
}
