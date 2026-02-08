import React from 'react';

interface BadgeProps {
    text:   string
    classes: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Badge: React.FC<BadgeProps> = ({text, classes}) => {
    return (
        <>
        {/* Positions tooltip in direct center, then moves down to bottom of group + 4px on hover */}
        <span className={`${classes} inline-block self-start p-1 bg-background-secondary font-semibold text-sm text-foreground-secondary rounded pointer-events-none`}>
            {text}
        </span>
        </>
    );
};

export default Badge;
