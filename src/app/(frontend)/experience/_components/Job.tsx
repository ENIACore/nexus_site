import React from 'react';
import Image from 'next/image';
import Badge from '@/src/components/ui/Badge';
import BulletList from '@/src/components/ui/BulletList';
import Heading from '@/src/components/ui/Heading';

interface WorkExperienceProps {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    technologies?: string[];
    accomplishments?: string[];
    logo: string;
    alt: string;
}

//className='absolute top-8 right-4 max-w-35 md:max-w-45 max-h-20 md:max-h-30 w-auto h-auto object-contain'
//top-8 right-4
const Job: React.FC<WorkExperienceProps> = ({
    company,
    jobTitle,
    startDate,
    endDate,
    technologies,
    accomplishments,
    logo,
    alt,
}) => {
    return (
        <>
            <div className='flex flex-row'>
                <div className='mr-4'>
                    <Heading className='' title={company} size='xl'/>
                    <Heading className='' title={jobTitle} size='lg'/>
                    <Heading className='' title={`${startDate} - ${endDate}`} size='bs'/>
                </div>
                <div className='ml-auto'>
                    <Image
                        src={logo}
                        alt={alt}
                        width={300}
                        height={300}
                        className='w-auto h-auto max-w-20 max-h-20 object-fill'
                        unoptimized
                    />
                </div>
            </div>

            <div>
            {technologies && technologies.map((tech, index) => (
                <Badge key={index} className="my-2 mr-2" text={tech}/>
            ))}
            </div>

            {accomplishments &&
            <BulletList
                items={accomplishments}
                className=""
            />
            }

        </>
    );
};

export default Job;
