import React from 'react';
import Link from 'next/link';
import Tooltip from '../ui/Tooltip';
import BackgroundGradient from '../ui/BackgroundGradient';
import { NAVIGATION_ITEMS } from '@/src/constants/navigation';

const Navbar: React.FC = () => {
    return (
        <nav className="relative layout-container mx-auto mb-4 bg-background border-2 border-border-subtle rounded-b-lg">
            <BackgroundGradient className="rounded-b-lg" opacity={.06}/>

            <ul className="flex flex-row justify-around m-4">
            {NAVIGATION_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                    <li key={item.path} className="relative group">
                        <Link href={item.path} className="cursor-pointer">
                            <Icon className="text-foreground hover:text-foreground-muted transition-colors"/>
                        </Link>
                        <Tooltip text={item.label}/>
                    </li>
                );
            })}
            </ul>
        </nav>
    );
};

export default Navbar;
