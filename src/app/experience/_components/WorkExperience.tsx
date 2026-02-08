import React from 'react';
import { Section } from 'lucide-react';
import SectionTitle from '@/src/components/ui/SectionTitle';
import SubSectionTitle from '@/src/components/ui/SubSectionTitle';
import Badge from '@/src/components/ui/Badge';


// Tailwind order: position & layout -> alignment → sizing -> spacing -> visuals -> effects
const WorkExperience: React.FC = () => {
    return (
        <div className="flex flex-col">
            <SectionTitle classes="!my-0" title="IBM"/>
            <SubSectionTitle title="Software Developer"/>
            <h4 className="text-base font-medium text-foreground-muted">
                October 2024 ◦ Present
            </h4>
            <div className="my-2">
                <Badge classes="mr-2" text='skill'/>
                <Badge classes="mr-2" text='skill'/>
                <Badge classes="mr-2" text='skill'/>
            </div>
            test
        </div>
    );
};

/*
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <SectionTitle title='My Journey'/>
                <Route size={32} className="text-foreground-secondary"/>
            </div>
        </div>
*/

export default WorkExperience;

