import React from 'react';

interface SubTextProps {
    text: string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const SubText: React.FC<SubTextProps> = ({text, classes}) => {
    return (
        <span className={`${classes} text-xs font-light text-foreground-muted`}>
        {text}
        </span>
    );
};
export default SubText;
