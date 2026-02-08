import React from 'react';

interface SubSectionTitleProps {
    title: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SubSectionTitle: React.FC<SubSectionTitleProps> = ({title}) => {
    return (
        <h3 className="text-xl font-semibold text-foreground">
            {title}
        </h3>
    );
};

export default SubSectionTitle;
