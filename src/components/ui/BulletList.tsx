import React from 'react';

interface BulletListProps {
    items: string[]
    classes?: string
}

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const BulletList: React.FC<BulletListProps> = ({items, classes = ''}) => {
    return (
        <ul className={`${classes} list-retro list-inside text-base xs:text-sm font-normal text-foreground`}>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
