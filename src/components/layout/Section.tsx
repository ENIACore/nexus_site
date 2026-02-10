import React from 'react';
import Heading from '../ui/Heading';
import BackgroundGradient from '../ui/BackgroundGradient';

interface SectionProps {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
    title?: string;
}

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
const Section: React.FC<SectionProps> = ({className, children, title}) => {
    return (
        <div className={`${className} relative bg-background rounded-lg layout-container p-4 m-4`}>
            <BackgroundGradient className="rounded-lg" opacity={.06}/> 

            {title && <Heading size='lg' title={title} className='my-4'/>}
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Section;
