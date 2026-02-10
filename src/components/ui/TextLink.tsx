import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
    text: string
    className?: string
    link: string
}

const TextLink: React.FC<TextLinkProps> = ({text, className, link}) => {
    return (
        <Link
            href={link}
            className={`${className} text-base font-normal text-foreground cursor-pointer hover:text-foreground-muted`}
        >
        {text}
        </Link>
    );
};
export default TextLink;
