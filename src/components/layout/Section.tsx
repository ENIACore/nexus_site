import React from 'react';
import Gradient from '../shared/Gradient';
//import Image from 'next/image';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Section: React.FC = () => {
    return (
        <div className="h-80 w-10/12 md:w-8/12 lg:w-6/12 mt-4 mb-4 rounded-lg bg-neutral-300">
        <Gradient/>
        Section test
        </div>
    );
};

export default Section;
