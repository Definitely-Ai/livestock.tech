import React from "react";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { LeadershipSection } from "./sections/LeadershipSection/LeadershipSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const ContactUsDesktop = () => {
  return (
    <main
      className="flex flex-col w-full bg-[#faf6eb]"
      data-model-id="8205:54741"
    >
      <NavbarSection />
      <HeaderSection />
      <ContactSection />
      <LeadershipSection />
      <FooterSection />
    </main>
  );
};
