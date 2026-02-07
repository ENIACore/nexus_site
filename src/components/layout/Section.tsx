import React from 'react';
import BackgroundGradient from '../ui/BackgroundGradient';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Section: React.FC = () => {
    return (
        <div className="relative h-80 w-4/5 md:w-3/4 lg:w-2/3 max-w-150 mt-4 mb-4 rounded-lg bg-neutral-300">
        <BackgroundGradient classes='rounded-lg' opacity={.04}/> 
        Section test
        </div>
    );
};

export default Section;
