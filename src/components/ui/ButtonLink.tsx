import Link from 'next/link';
import React from 'react';
import BackgroundGradient from './BackgroundGradient';

interface ButtonLinkProps {
    className?: string;
    link: string;
    text: string;
    size: 'lg'; // TODO - Add other sizes
}

const ButtonLink: React.FC<ButtonLinkProps> = ({className, text, link, size}) => {
    return (
        <>
        {size === 'lg' && (
            <Link
                href={link}
                className={`${className} relative inline-block text-2xl font-bold text-foreground-neutral bg-background-primary hover:bg-background-muted transition-colors duration-300 cursor-pointer rounded-lg overflow-hidden px-2 py-1`}
            >
                <BackgroundGradient className="" opacity={.06}/>
                {text}
            </Link>
        )}
        </>
    );
};
export default ButtonLink;


/*
    *
    *
                <ButtonLink className='z-10 mr-2 mb-2 text-2xl! xs:text-lg' text='Github' link={githubLink}/>
                <ButtonLink className='z-10 mb-2 text-2xl! xs:text-lg' text='View More' link={viewMoreLink}/>
                */
