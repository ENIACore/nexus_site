import React from 'react';
import Image from 'next/image';
import Badge from '@/src/components/ui/Badge';
import BackgroundGradient from '@/src/components/ui/BackgroundGradient';
import ButtonLink from '@/src/components/ui/ButtonLink';
import Text from '@/src/components/ui/Text';
import Heading from '@/src/components/ui/Heading';

interface PreviewProps {
    name: string;
    description: string;
    url: string;
    alt: string;
    technologies?: string[];
    github?: string;
    view?: string;
}

const Preview: React.FC<PreviewProps> = ({
    name,
    description,
    url,
    alt,
    technologies,
    github,
    view
}) => {
    return (
        <div className="group relative flex flex-col sm:flex-row sm:h-37.5 rounded-lg overflow-hidden bg-background-emphasis p-4 sm:p-0 m-4">
            <BackgroundGradient className="rounded-lg" opacity={.06}/>
            <Thumbnail url={url} alt={alt} />
            <Content
                name={name}
                description={description}
                technologies={technologies}
            />
            <Actions github={github} view={view} />
        </div>
    );
};

const Thumbnail: React.FC<{ url: string; alt: string }> = ({ url, alt }) => {
    return (
        <div className="flex flex-row justify-center overflow-hidden">
            <div className="w-50 h-50 sm:w-37.5 sm:h-37.5 hover-scale">
                <Image
                    src={url}
                    alt={alt}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover rounded-lg"
                    loading="eager"
                    priority
                />
            </div>
        </div>
    );
};

const Content: React.FC<{ name: string; description: string; technologies?: string[] }> = ({
    name,
    description,
    technologies
}) => {
    return (
        <div className="flex flex-col flex-1 justify-between overflow-hidden">
            <div className="hover-scale mt-4 sm:mt-2 pl-2">
                <Heading className="text-foreground-neutral pointer-events-none" title={name} size="md"/>
                <Text className='text-foreground-neutral pointer-events-none' text={description} size='bs'/>
            </div>
            <div className="hover-scale mt-4 sm:mt-auto mb-2 pl-2">
            {technologies && technologies.map((tech, index) => (
                <Badge key={index} text={tech} className="mt-1 mr-1"/>
            ))}
            </div>
        </div>
    );
};

const Actions: React.FC<{ github?: string; view?: string }> = ({ github, view }) => {
    return (
        <>
            {/* Extra small screen: static buttons below content */}
            <div className="sm:hidden flex flex-row flex-wrap mt-2">
                <ButtonLink className='z-10 mr-2 mt-2' text='Github' link={github == null ? '' : github} size='lg'/>
                <ButtonLink className='z-10 mt-2' text='View More' link={view == null ? '' : view} size='lg'/>
            </div>
            {/* Small screen and larger: hover overlay */}
            <div className="hidden sm:flex flex-row items-center justify-center absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-neutral-300 opacity-25" />
                <ButtonLink className='z-10 mr-2' text='Github' link={github == null ? '' : github} size='lg'/>
                <ButtonLink className='z-10' text='View More' link={view == null ? '' : view} size='lg'/>
            </div>
        </>
    );
};

export default Preview;
