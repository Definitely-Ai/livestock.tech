import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { DataInsightsSection } from "./sections/DataInsightsSection/DataInsightsSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection/SolutionsOverviewSection";

export const HomeDesktop = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54753"
    >
      <NavigationBarSection />
      <HeaderSection />
      <HeroSection />
      <MainContentSection />
      <ServicesSection />
      <SolutionsOverviewSection />
      <FeaturesSection />
      <DataInsightsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
