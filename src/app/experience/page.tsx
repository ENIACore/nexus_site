import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import ExperienceSectionContent from './_components/ExperienceSectionContent';
import Footer from '../../components/shared/Footer';

const ExperiencePage: React.FC = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className="py-8">
                <SectionWrapper>
                    <Section>
                        <ExperienceSectionContent/>
                    </Section>
                </SectionWrapper>
            </main>
        </>
    );
}

export default ExperiencePage;
