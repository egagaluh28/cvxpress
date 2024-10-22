import { Header, TrustedLogos, WhatSection, FeaturesSection, StepSection, HelpSection, TestimonialSection, CtaSection } from '@/components';

export default function IndexPage() {
  return (
    <div>
      {/* <title>CVXpress</title> */}
      <Header /> {/* Calling the Home component */}
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
