import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  Layout,
} from '@/components';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </Layout>
  );
};

export default HomePage;
