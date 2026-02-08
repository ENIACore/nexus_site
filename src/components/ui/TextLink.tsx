import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
    text: string
    classes: string
    link: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const TextLink: React.FC<TextLinkProps> = ({text, classes, link}) => {
    return (
        <Link
            href={link}
            className={`${classes} cursor-pointer text-base xs:text-sm font-normal text-foreground hover:text-foreground-muted`}
        >
        {text}
        </Link>
    );
};
export default TextLink;
