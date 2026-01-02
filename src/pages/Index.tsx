import { PageLayout } from "@/components/layout";
import { HeroSection, WhatWeDoSection, TrustSection, CTASection } from "@/components/home";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <WhatWeDoSection />
      <TrustSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
