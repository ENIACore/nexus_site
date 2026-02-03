import React from 'react';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Header: React.FC = () => {
    return (
        <header className="flex flex-col items-center justify-center h-screen w-screen bg-background">
        <h1 className="text-6xl font-bold text-foreground">Test</h1>
        </header>
    );
};

export default Header;
