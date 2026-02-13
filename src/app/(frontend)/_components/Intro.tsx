import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/src/components/ui/Text';
import Heading from '@/src/components/ui/Heading';

import LinkedinIcon from '@/src/components/icons/LinkedinIcon';
import GithubIcon from '@/src/components/icons/GithubIcon';
import TwitterIcon from '@/src/components/icons/TwitterIcon';
import EmailIcon from '@/src/components/icons/EmailIcon';

import { getPayload } from 'payload'
import config from '@payload-config'

async function Intro(): Promise<React.ReactNode> {

    const payload = await getPayload({ config })
    const socials = await payload.findGlobal({
        slug: 'social-links',
    })

    return (
        <>
            <div className="flex flex-row justify-center">
                <Image
                    src="/images/profile/chase-lamkin-pfp.jpeg"
                    alt="Chase Lamkin profile picture"
                    height={150}
                    width={150}
                    priority
                    className="h-auto rounded-full border-2 border-border"
                />
            </div>

            <div className="flex flex-row justify-center">
                <Text className="italic" text="@ENIACore" size='xs'/>
            </div>

            <div className="flex flex-row justify-center">
                <Heading className='' title='Chase Lamkin' size='xl'/>
            </div>

            <div className="flex flex-row justify-center">
                <Link 
                    aria-label='linkedin link' 
                    href={socials.linkedin && socials.linkedin !== '#' ? `https://www.linkedin.com/in/${socials.linkedin}/` : '#'} 
                    className="m-2 cursor-pointer"
                >
                    <LinkedinIcon/>
                </Link>
                <Link 
                    aria-label='github link' 
                    href={socials.github && socials.github !== '#' ? `https://github.com/${socials.github}` : '#'} 
                    className="m-2 cursor-pointer"
                >
                    <GithubIcon/>
                </Link>
                <Link 
                    aria-label='twitter link' 
                    href={socials.twitter && socials.twitter !== '#' ? `https://x.com/${socials.twitter}` : '#'} 
                    className="m-2 cursor-pointer"
                >
                    <TwitterIcon/>
                </Link>
                <Link 
                    aria-label='email link' 
                    href={socials.email && socials.email !== '#' ? `mailto:${socials.email}` : '#'} 
                    className="m-2 cursor-pointer"
                >
                    <EmailIcon/>
                </Link>
            </div>

            <div className="flex flex-row justify-center">
                <Text className='text-center' text="Hi, I'm Chase! I'm a software engineer with ~3 YOE and a love for building things. I built this site to share my passion projects and opinions on the industry." size='bs'/>
            </div>
        </>
    );
};

export default Intro;
