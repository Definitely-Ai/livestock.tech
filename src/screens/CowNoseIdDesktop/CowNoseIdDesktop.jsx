import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { FutureTechnologySection } from "./sections/FutureTechnologySection/FutureTechnologySection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HerdManagementSection } from "./sections/HerdManagementSection/HerdManagementSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { TechnologyOverviewSection } from "./sections/TechnologyOverviewSection/TechnologyOverviewSection";

export const CowNoseIdDesktop = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54747"
    >
      <NavigationBarSection />
      <HeaderSection />
      <HeroSection />
      <TechnologyOverviewSection />
      <HerdManagementSection />
      <FutureTechnologySection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
