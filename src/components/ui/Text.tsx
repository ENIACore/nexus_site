import React from 'react';

interface TextProps {
    className?: string
    text: string
    size: 'bs' | 'xs' // TODO - xl, lg & md
}

/*
        {size == 'xs' && (

        )}
    */
const Text: React.FC<TextProps> = ({className, text, size}) => {
    return (
        <>
        {size === 'bs' && (
            <p className={`${className} text-base font-normal text-foreground`}>
            {text}
            </p>
        )}
        {size === 'xs' && (
            <p className={`${className} text-xs font-light text-foreground-muted`}>
            {text}
            </p>
        )}
        </>
    );
};
export default Text;
