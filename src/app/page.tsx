import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Section from '../components/layout/Section';

const Page: React.FC = () => {
    return (
        <main >
            <SectionWrapper>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
            </SectionWrapper>
        </main>
    );
}

/*
Page background: --color-neutral-100 (#f9f7f4)
Card background: --color-neutral-50 (#fdfcfa)
Dark Mode:
Page background: --color-neutral-950 (#1a1816)
Card background: --color-neutral-900 (#2c2825)
*/

export default Page
