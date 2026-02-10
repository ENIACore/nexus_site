import React from 'react';

interface PrimaryTitleProps {
    className?: string;
    title: string;
    size: 'xl' | 'lg' | 'md' | 'bs'; // TODO - sm
}

const Heading: React.FC<PrimaryTitleProps> = ({className, title, size = 'md'}) => {
    return (
        <>
            {size === 'xl' && (
                <h1 className={`text-3xl font-extrabold text-foreground ${className}`}>
                    {title}
                </h1>
            )}
            {size === 'lg' && (
                <h2 className={`text-2xl font-bold text-foreground-secondary ${className}`}>
                    {title}
                </h2>
            )}
            {size === 'md' && (
                <h3 className={`${className} text-xl font-semibold text-foreground`}>
                    {title}
                </h3>
            )}
            {size === 'bs' && (
                <h4 className="text-lg font-medium text-foreground-muted">
                    {title}
                </h4>
            )}
        </>
    );
};

export default Heading;
