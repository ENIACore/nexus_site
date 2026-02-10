import React from 'react';
import TextLink from '../ui/TextLink';
import BackgroundGradient from '../ui/BackgroundGradient';
import { NAVIGATION_ITEMS } from '@/src/constants/navigation';
import Text from '../ui/Text';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative layout-container mx-auto bg-background border-2 border-border-subtle rounded-t-lg">
            <BackgroundGradient className="rounded-t-lg" opacity={.06}/>

            <ul className="flex flex-row justify-around flex-wrap m-4">
                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path} className='mx-1'>
                        <TextLink text={item.label} link={item.path}/>
                    </li>
                ))}
            </ul>

            {/* Divider line - half width */}
            <div className="flex justify-center">
                <div className="w-4/5 border-t border-border-subtle"></div>
            </div>

            <div className="flex flex-row justify-around flex-wrap m-4">
                <Text className='cursor-default' text={`© ${currentYear} Chase Lamkin`} size='xs'/> 
                <Text className='cursor-default' text='Made with ☕ ☕ ☕' size='xs'/> 
            </div>
        </footer>
    );
};

export default Footer;
