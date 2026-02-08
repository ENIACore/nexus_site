import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import ExperienceSectionContent from './_components/ExperienceSectionContent';
//import Footer from '../../components/shared/Footer';
import WorkExperience from './_components/WorkExperience';
import { workExperiences } from './_data/workExperienceData';
import Footer from '@/src/components/shared/Footer';

const ExperiencePage: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main className="py-8">
                <SectionWrapper>
                    <Section>
                        <ExperienceSectionContent/>
                    </Section>
                    {workExperiences.map((experience, index) => (
                        <Section key={index}>
                            <WorkExperience {...experience} />
                        </Section>
                    ))}
                </SectionWrapper>
            </main>
            <Footer/>
        </>
    );
}

export default ExperiencePage;
