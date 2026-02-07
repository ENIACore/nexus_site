import React from 'react';
import BackgroundGradient from '../ui/BackgroundGradient';

interface SectionProps {
    children: React.ReactElement | React.ReactElement[];
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Section: React.FC<SectionProps> = ({children}) => {
    return (
        <div className="relative w-4/5 md:w-3/4 lg:w-2/3 max-w-150 mt-4 mb-4 p-4 rounded-lg bg-background">
            <BackgroundGradient classes='rounded-lg' opacity={.06}/> 
            {children}
        </div>
    );
};

export default Section;
