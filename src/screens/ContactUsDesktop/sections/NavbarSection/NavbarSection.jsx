import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

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
    <header className="flex h-[72px] w-full items-center justify-center bg-[color:var(--color-schemes-color-scheme-1-background)] px-[var(--spacing-sizing-page-padding-padding-global)] py-0">
      <div className="flex w-full items-center justify-center gap-8">
        <div className="flex flex-1 items-start">
          <a
            href="https://www.livestock.tech"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="h-9 w-[84px]"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-6.svg"
            />
          </a>
        </div>

        <NavigationMenu className="flex-none">
          <NavigationMenuList className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <NavigationMenuItem
                key={index}
                className="flex items-center justify-center"
              >
                <Link
                  className="mt-[-1.00px] block w-fit whitespace-nowrap font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  to={link.path}
                >
                  {link.text}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end">
          <Button
            asChild
            className="rounded-xl bg-[color:var(--primitives-color-fern-frond)] px-5 py-2 shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
          >
            <Link
              to="/our-technology-u8226-desktop"
              className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#faf6eb] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]"
            >
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
