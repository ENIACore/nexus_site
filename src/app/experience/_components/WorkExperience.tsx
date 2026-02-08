import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/src/components/ui/SectionTitle';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import Badge from '@/src/components/ui/Badge';
import BulletList from '@/src/components/ui/BulletList';

interface WorkExperienceProps {
    companyLogo: string;
    companyName: string;
    logoClasses: string;
    jobTitle: string;
    dateRange: string;
    technologies: string[];
    accomplishments: string[];
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const WorkExperience: React.FC<WorkExperienceProps> = ({
    companyLogo,
    companyName,
    logoClasses,
    jobTitle,
    dateRange,
    technologies,
    accomplishments
}) => {
    return (
        <div className="relative flex flex-col">
            <Image
                src={companyLogo}
                alt={`${companyName} Logo`}
                width={75}
                height={75}
                unoptimized
                className={`${logoClasses} absolute top-0 right-0 h-18.75 w-auto`}
            />
            <SectionTitle classes="!my-0" title={companyName}/>
            <SubSectionTitle title={jobTitle}/>
            <h4 className="text-base font-medium text-foreground-muted">
                {dateRange}
            </h4>
            <div className="my-2">
                {technologies.map((tech, index) => (
                    <Badge key={index} classes="mr-2" text={tech}/>
                ))}
            </div>
            <BulletList
                items={accomplishments}
                classes="mt-2 text-sm leading-loose"
            />
        </div>
    );
};

export default WorkExperience;

