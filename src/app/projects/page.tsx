import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import IntroSectionContent from './_components/IntroSectionContent';
import ProjectPreview from './_components/ProjectPreview';

const ProjectsPage: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main className="py-8">
                <SectionWrapper>
                    <Section>
                        <IntroSectionContent/>
                    </Section>
                    <Section>
                        <ProjectPreview/>
                    </Section>
                </SectionWrapper>
            </main>
            {/*<Footer/>*/}
        </>
    );
}

export default ProjectsPage;
