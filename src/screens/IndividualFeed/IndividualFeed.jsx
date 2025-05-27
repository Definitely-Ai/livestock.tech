import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { InsightsSection } from "./sections/InsightsSection/InsightsSection";
import { MonitoringSolutionsSection } from "./sections/MonitoringSolutionsSection/MonitoringSolutionsSection";
import { NavbarSection } from "./sections/NavbarSection";
import { TechnologyOverviewSection } from "./sections/TechnologyOverviewSection/TechnologyOverviewSection";

export const IndividualFeed = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54745"
    >
      <NavbarSection />
      <HeaderSection />
      <HeroSection />
      <InsightsSection />
      <TechnologyOverviewSection />
      <BenefitsSection />
      <MonitoringSolutionsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
