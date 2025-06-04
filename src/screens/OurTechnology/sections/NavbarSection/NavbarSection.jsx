import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const NavbarSection = () => {
  // Navigation links data for mapping
  const navLinks = [
    { text: "Contact Us", path: "/contact-us-u8226-desktop" },
    { text: "For Investors", path: "/for-investors-u8226-desktop" },
    { text: "Our Technology", path: "/our-technology-u8226-desktop" },
    {
      text: "Pen Monitoring",
      path: "/continuous-pen-monitoring-u8226-desktop",
    },
    { text: "Nose ID", path: "/cow-nose-id-u8226-desktop" },
    {
      text: "Feed Intake",
      path: "/individual-feed-intake-monitoring-u8226-desktop",
    },
  ];

  return (
    <header className="w-full h-[72px] flex items-center justify-center px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <nav className="w-full flex items-center justify-between gap-8">
        {/* Logo section */}
        <div className="flex-1">
          <a
            href="https://www.livestock.tech"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-8.svg"
            />
          </a>
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]"
              to={link.path}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex-1 flex justify-end">
          <Button
            asChild
            className="px-5 py-2 h-auto rounded-xl bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
          >
            <Link to="/our-technology-u8226-desktop">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                Explore
              </span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
