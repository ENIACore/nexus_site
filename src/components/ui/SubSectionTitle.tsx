import React from 'react';

interface SubSectionTitleProps {
    title: string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SubSectionTitle: React.FC<SubSectionTitleProps> = ({title, classes}) => {
    return (
        <h3 className={`${classes} text-xl font-semibold text-foreground`}>
            {title}
        </h3>
    );
};

export default SubSectionTitle;
