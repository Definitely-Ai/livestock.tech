import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeedlotManagementSection } from "./sections/FeedlotManagementSection/FeedlotManagementSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HealthTrackingSection } from "./sections/HealthTrackingSection/HealthTrackingSection";
import { HerdManagementSection } from "./sections/HerdManagementSection/HerdManagementSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { LivestockConditionsSection } from "./sections/LivestockConditionsSection/LivestockConditionsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const ContinuousPen = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54749"
    >
      <NavigationBarSection />
      <HeaderSection />
      <HeroSection />
      <HealthTrackingSection />
      <HerdManagementSection />
      <LivestockConditionsSection />
      <FeedlotManagementSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
