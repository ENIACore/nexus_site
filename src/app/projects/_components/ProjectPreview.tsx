import React from 'react';
import Image from 'next/image';
import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const ProjectPreview: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <SectionTitle classes='' title='Projects'/>
            <div className="flex flex-row h-37.5 rounded-lg">
                <div className="w-37.5 h-37.5 shrink-0 rounded-l-lg">
                    <Image
                        src='/images/project-thumbnails/media-library-manager-thumbnail.png'
                        alt='project preview image'
                        height={150}
                        width={150}
                        className="w-full h-full object-cover rounded-l-lg"
                        unoptimized
                    />
                </div>
                <div className="flex-1 rounded-r-lg bg-background-emphasis p-4">
                    test2
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
