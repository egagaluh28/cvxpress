import {
  Home,
  TrustedLogos,
  WhatSection,
  FeaturesSection,
  StepSection,
  HelpSection,
  TestimonialSection,
  CtaSection,
  CareerBlog,
  ToolsSection,
} from "@/components/user";

export default function IndexPage() {
  return (
    <div>
      <Home />
      <TrustedLogos />
      <WhatSection />
      <ToolsSection />
      <FeaturesSection />
      <StepSection />
      <HelpSection />
      <TestimonialSection />
      <CareerBlog />
      <CtaSection />
    </div>
  );
}
