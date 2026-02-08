import React from 'react';
import Image from 'next/image';
import TwitterIcon from '@/src/components/ui/TwitterIcon';
import LinkedinIcon from '@/src/components/ui/LinkedinIcon';
import GithubIcon from '@/src/components/ui/GithubIcon';
import EmailIcon from '@/src/components/ui/EmailIcon';
import Paragraph from '@/src/components/ui/Paragraph';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const IntroSectionContent: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center mt-2">
                    <Image
                        src="/chase-lamkin-pfp.jpeg"
                        alt="Chase Lamkin profile picture"
                        height={150}
                        width={150}
                        className="h-auto rounded-full border-2 border-border"
                    />
                </div>
                <div className="flex flex-row justify-center">
                    <p className="text-xs text-foreground-muted italic">@ENIACore</p>
                </div>
                <div className="flex flex-row justify-center">
                    <h1 className="text-3xl font-bold text-foreground">Chase Lamkin</h1>
                </div>
                <div className="flex flex-row justify-center">
                    <a className="m-2 cursor-pointer">
                    <LinkedinIcon/>
                    </a>
                    <a className="m-2 cursor-pointer">
                    <GithubIcon/>
                    </a>
                    <a className="m-2 cursor-pointer">
                    <TwitterIcon/>
                    </a>
                    <a className="m-2 cursor-pointer">
                    <EmailIcon/>
                    </a>
                </div>
                <div className="flex flex-row justify-center mt-2 mb-2">
                <Paragraph classes="text-center" text="Hi, I'm Chase. I'm a Software Engineer with ~3 YOE & a passion for creating things. I built this site to share my passion projects & opinions on the industry."/>
                </div>
            </div>
        </>
    );
};

export default IntroSectionContent;
