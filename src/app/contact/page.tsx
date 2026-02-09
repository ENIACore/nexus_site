import React from 'react';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Section from '../../components/layout/Section';
import Navbar from '../../components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import ContactSectionContent from './_components/ContactSectionContent';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar/>
            <main className="py-8">
                <SectionWrapper>
                    <Section>
                        <ContactSectionContent/>
                    </Section>
                </SectionWrapper>
            </main>
            <Footer/>
        </div>
    );
}

export default ContactPage;
