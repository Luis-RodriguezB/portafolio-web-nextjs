import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  PortafolioSection,
  ResumeSection,
  Layout,
} from '@/components';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortafolioSection />
      <ContactSection />
      <FooterSection />
    </Layout>
  );
};

export default HomePage;
