import React from 'react';

interface SectionTitleProps {
    title: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return (
        <h2 className="text-2xl font-bold text-foreground-secondary my-4">
            {title}
        </h2>
    );
};

export default SectionTitle;
