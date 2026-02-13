import { GlobalConfig } from 'payload';

export const SocialLinks: GlobalConfig = {
    slug: 'social-links',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'linkedin',
            type: 'text',
            label: 'LinkedIn Username',
            required: false,
            admin: {
                placeholder: 'yourprofile',
                description: 'Enter your LinkedIn username (e.g., "yourprofile" from linkedin.com/in/yourprofile)',
            },
            validate: (value: string | null | undefined) => {
                if (value === null || value === undefined || value.trim() === '') {
                    return 'LinkedIn username is required';
                }
                if (value.includes('/') || value.includes('linkedin.com')) {
                    return 'Enter only the username, not the full URL';
                }
                return true;
            },
        },
        {
            name: 'github',
            type: 'text',
            label: 'GitHub Username',
            required: false,
            admin: {
                placeholder: 'yourusername',
                description: 'Enter your GitHub username (e.g., "yourusername" from github.com/yourusername)',
            },
            validate: (value: string | null | undefined) => {
                if (value === null || value === undefined || value.trim() === '') {
                    return 'GitHub username is required';
                }
                if (value.includes('/') || value.includes('github.com')) {
                    return 'Enter only the username, not the full URL';
                }
                return true;
            },
        },
        {
            name: 'twitter',
            type: 'text',
            label: 'Twitter/X Username',
            required: false,
            admin: {
                placeholder: 'yourusername',
                description: 'Enter your Twitter/X username (e.g., "yourusername" from x.com/yourusername)',
            },
            validate: (value: string | null | undefined) => {
                if (value === null || value === undefined || value.trim() === '') {
                    return 'Twitter/X username is required';
                }
                if (value.includes('/') || value.includes('twitter.com') || value.includes('x.com')) {
                    return 'Enter only the username, not the full URL';
                }
                return true;
            },
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email Address',
            required: false,
            admin: {
                placeholder: 'your@email.com',
            },
        },
    ],
};
