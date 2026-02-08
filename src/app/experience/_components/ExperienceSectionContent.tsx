import Paragraph from '@/src/components/ui/Paragraph';
import SectionTitle from '@/src/components/ui/SectionTitle';
import React from 'react';

// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const ExperienceSectionContent: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle title='Experience'/>
            <div className="flex flex-col gap-6">
                {/* Example experience item - customize with your own */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-foreground">Job Title</h3>
                    <p className="text-foreground-muted">Company Name • Start Date - End Date</p>
                    <Paragraph text="Description of your role and responsibilities. Add your accomplishments and what you learned."/>
                </div>

                {/* Add more experience items here */}
            </div>
        </div>
    );
};

export default ExperienceSectionContent;
