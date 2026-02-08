import React from 'react';

interface SectionTitleProps {
    title: string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SectionTitle: React.FC<SectionTitleProps> = ({title, classes}) => {
    return (
        <h2 className={`text-2xl font-bold text-foreground-secondary my-4 ${classes}`}>
            {title}
        </h2>
    );
};

export default SectionTitle;
