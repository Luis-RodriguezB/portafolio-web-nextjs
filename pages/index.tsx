import {
  ContactSection,
  FooterSection,
  HeroSection,
  Layout,
} from '@/components';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ContactSection />
      <FooterSection />
    </Layout>
  );
};

export default HomePage;
