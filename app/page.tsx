import BackgroundParallax from '@/components/BackgroundParallax';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BookPromo from '@/components/BookPromo';
import SocialProofEmbed from '@/components/SocialProofEmbed';
import CaseStudies from '@/components/CaseStudies';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden flex flex-col items-center">
      <CustomCursor />
      <BackgroundParallax />
      <Hero />
      <ValueProp />
      <Services />
      <Testimonials />
      <BookPromo />
      <SocialProofEmbed />
      <CaseStudies />
      <CTA />
    </main>
  );
}
