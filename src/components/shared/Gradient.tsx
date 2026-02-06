import React from 'react';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const Gradient: React.FC = () => {
    return (
        <div
            className="absolute inset-0 opacity-[0.01] pointer-events-none"
            style={{
                backgroundImage: "url('bg-gradient.png')",
                backgroundSize: '161px',
                backgroundRepeat: 'repeat'
            }}
        >
        </div>
    );
};

export default Gradient;
