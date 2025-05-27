import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { JoinUsSection } from "./sections/JoinUsSection/JoinUsSection";
import { MarketInsightsSection } from "./sections/MarketInsightsSection/MarketInsightsSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";
import { TechnologyOverviewSection } from "./sections/TechnologyOverviewSection/TechnologyOverviewSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const ForInvestors = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54743"
    >
      <NavbarSection />
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <TechnologyOverviewSection />
      <MarketInsightsSection />
      <TestimonialsSection />
      <JoinUsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
