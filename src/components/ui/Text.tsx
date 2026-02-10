import React from 'react';

interface TextProps {
    className?: string
    text: string
    size: 'bs' | 'sm' | 'xs' // TODO - xl, lg & md
}

const Text: React.FC<TextProps> = ({className, text, size}) => {
    return (
        <>
        {size === 'bs' && (
            <span className={`${className} inline-block text-base font-normal text-foreground`}>
            {text}
            </span>
        )}
        {size === 'sm' && (
            <span className={`${className} inline-block text-sm font-light text-foreground`}>
            {text}
            </span>
        )}
        {size === 'xs' && (
            <span className={`${className} inline-block text-xs font-thin text-foreground-muted`}>
            {text}
            </span>
        )}
        </>
    );
};
export default Text;
