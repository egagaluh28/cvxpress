import { Home, TrustedLogos, WhatSection, FeaturesSection, StepSection, HelpSection, TestimonialSection, CtaSection } from '@/components';

export default function IndexPage() {
  return (
    <div>
      {/* <title>CVXpress</title> */}
      <Home /> {/* Calling the Home component */}
      <TrustedLogos /> {/* Calling the TrustedLogos component */}
      <WhatSection />
      <FeaturesSection />
      <StepSection />
      <HelpSection />
      <TestimonialSection />
      <CtaSection />

    </div>
  );
}
