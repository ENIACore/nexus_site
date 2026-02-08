import React from 'react';

interface ParagraphProps {
    text: string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Paragraph: React.FC<ParagraphProps> = ({text, classes}) => {
    return (
        <p className={`${classes} text-base xs:text-sm font-normal text-foreground`}>
        {text}
        </p>
    );
};
export default Paragraph;
