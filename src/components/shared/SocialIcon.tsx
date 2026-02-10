import React from 'react';
import Link from 'next/link';

interface SocialIconProps {
    className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ className = '' }) => {
    return (

        <div className={`flex flex-row justify-center ${className}`}>
            {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                    <Link
                        key={social.name}
                        href={social.url}
                        className="m-2 cursor-pointer"
                        aria-label={social.name}
                    >
                        <Icon />
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialIcon;
