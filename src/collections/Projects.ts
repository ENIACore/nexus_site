import type { CollectionConfig } from "payload";
import { TECHNOLOGIES } from '@/src/constants/technologies';

export const Projects: CollectionConfig = {
    slug: 'projects',
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
            name: 'name',
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
            name: 'github',
            type: 'text',
            required: false,
        },
        {
            name: 'view',
            type: 'text',
            required: false,
        },
        {
            name: 'technologies',
            type: 'select',
            hasMany: true,
            options: TECHNOLOGIES.map(t => ({ label: t, value: t })),
        },
    ],
}

