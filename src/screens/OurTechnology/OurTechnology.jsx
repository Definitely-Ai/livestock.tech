import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { DataSolutionsSection } from "./sections/DataSolutionsSection/DataSolutionsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FutureManagementSection } from "./sections/FutureManagementSection/FutureManagementSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { InnovationSection } from "./sections/InnovationSection/InnovationSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const OurTechnology = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54751"
    >
      <NavbarSection />
      <HeaderSection />
      <HeroSection />
      <InnovationSection />
      <DataSolutionsSection />
      <FutureManagementSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
