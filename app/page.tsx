import BackgroundParallax from '@/components/BackgroundParallax';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
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
      <CTA />
    </main>
  );
}
