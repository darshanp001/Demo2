import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ServicesPreview from '../components/home/ServicesPreview';
import DoctorIntro from '../components/home/DoctorIntro';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import CTABanner from '../components/home/CTABanner';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <FeaturesSection />
      {/* <DoctorIntro /> */}
      <Testimonials />
      {/* <Gallery /> */}
      <CTABanner />
    </>
  );
};

export default HomePage;
