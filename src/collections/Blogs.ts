import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    upload: false,
    fields: [
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

