import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    upload: false,
    fields: [
        {
            name: 'order',
            type: 'number',
            required: true,
            defaultValue: 0,
            admin: {
                description: 'Lower numbers appear first'
            }
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'view',
            type: 'text',
            required: false,
        },
    ],
}

