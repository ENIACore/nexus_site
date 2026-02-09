import React from 'react';
import Link from 'next/link';
import SectionTitle from '@/src/components/ui/SectionTitle';
import Paragraph from '@/src/components/ui/Paragraph';
import LinkedinIcon from '@/src/components/ui/LinkedinIcon';
import GithubIcon from '@/src/components/ui/GithubIcon';
import EmailIcon from '@/src/components/ui/EmailIcon';
import TwitterIcon from '@/src/components/ui/TwitterIcon';
import SubText from '@/src/components/ui/SubText';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import TextLink from '@/src/components/ui/TextLink';
import ContactMethod from './ContactMethod';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const ContactSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <SectionTitle classes="text-center !my-4" title="Contact Me"/>
            <Paragraph
                classes="text-center max-w-lg my-4"
                text="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and software engineering."
            />

            <div className="flex flex-col items-center">
                <ContactMethod icon={<EmailIcon />} social='Email' link='mailto:contact@lamkin.dev' tag='contact@lamkin.dev' classes='my-4'/>
                <ContactMethod icon={<LinkedinIcon />} social='LinkedIn'link='https://www.linkedin.com/in/chaselamkin/' tag='@chaselamkin' classes='my-4'/>
                <ContactMethod icon={<TwitterIcon />} social='Twitter' link='https://x.com/ENIACore' tag='@ENIACore' classes='my-4'/>
            </div>

            <Paragraph
                classes="text-center max-w-md italic !my-4"
                text="I am most active on Email and typically respond within 24-48 hours ☺"
            />
        </div>
    );
};
export default ContactSectionContent;
