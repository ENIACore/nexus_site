import React from 'react';
import Link from 'next/link';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import TextLink from '@/src/components/ui/TextLink';


interface ContactMethodProps {
    icon: React.ReactNode
    social: string
    link: string
    tag: string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const ContactMethod: React.FC<ContactMethodProps> = ({icon, social, link, tag, classes}) => {

    return (
        <div className={`${classes} flex flex-col`}>
            <SubSectionTitle classes="font-semibold text-center" title={social}/>
            <div className="flex flex-row">
                <Link href={link} aria-label={`link to ${social}`}>{icon}</Link>
                <TextLink classes='ml-4 text-foreground-muted' link={link} text={tag}/>
            </div>
        </div>
    );
};

export default ContactMethod;




/*
                <SubSectionTitle classes="font-semibold" title="Email"/>
                <TextLink text=''/>
*/
