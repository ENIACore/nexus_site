import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import ExperienceSectionContent from './_components/ExperienceSectionContent';
//import Footer from '../../components/shared/Footer';
import WorkExperience from './_components/WorkExperience';

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
                    <Section>
                        <WorkExperience
                            companyLogo="/images/logos/IBM-logo.png"
                            companyName="IBM"
                            jobTitle="Software Developer"
                            dateRange="October 2024 ◦ Present"
                            technologies={[
                                'Java',
                                'Spring Boot',
                                'Azure',
                                'Oracle Database',
                                'CI/CD'
                            ]}
                            accomplishments={[
                                "Developed enterprise Java applications for DHCS as part of IBM's Eye on the Cloud team",
                                "Migrated ETL mapping logic from CloverETL to Oracle tools, handling GRF file transformations and business rules",
                                "Built aTAR application to process and convert 8 file types into compressed PDFs for Treatment Access Requests",
                                "Led aTAR production deployment with live debugging and issue resolution for successful go-live"
                            ]}
                        />
                    </Section>
                </SectionWrapper>
            </main>
        </>
    );
}

export default ExperiencePage;
