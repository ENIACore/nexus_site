import type { CollectionConfig } from "payload";
import { TECHNOLOGIES } from '@/src/constants/technologies';

export const Jobs: CollectionConfig = {
    slug: 'jobs',
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
            name: 'company',
            type: 'text',
            required: true,
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'startDate',
            type: 'text',
            required: true,
        },
        {
            name: 'endDate',
            type: 'text',
            required: true,
        },
        {
            name: 'technologies',
            type: 'select',
            hasMany: true,
            options: TECHNOLOGIES.map(t => ({ label: t, value: t })),
        },
        {
            name: 'accomplishments',
            type: 'text',
            hasMany: true,
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
}
