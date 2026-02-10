import React from 'react';
import Section from './Section';

interface SectionWrapperProps {
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({children}) => {
    return (
        <div className="flex flex-col items-center">
        {children}
        </div>
    );
};

export default SectionWrapper;
