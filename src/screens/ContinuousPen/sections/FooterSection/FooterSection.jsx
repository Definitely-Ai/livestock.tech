import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "Facebook",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---facebook-6.svg",
    },
    {
      name: "Instagram",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---instagram-6.svg",
    },
    { name: "X", icon: "https://c.animaapp.com/LEM5cvaF/img/icon---x-6.svg" },
    {
      name: "LinkedIn",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---linkedin-6.svg",
    },
    {
      name: "YouTube",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---youtube-5.svg",
    },
  ];

  // Navigation links data
  const navLinks = [
    { name: "Contact Us", path: "/contact-us-u8226-desktop" },
    { name: "Our Solutions", path: "/our-technology-u8226-desktop" },
  ];

  // Footer legal links data
  const legalLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Cookies Settings", path: "#" },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center gap-8 w-full">
          {/* Logo */}
          <div className="flex flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-11.svg"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="font-text-small-semi-bold text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] font-[number:var(--text-small-semi-bold-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-small-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center justify-end gap-3 flex-1">
            {socialLinks.map((social, index) => (
              <img
                key={index}
                className="w-6 h-6"
                alt={`Icon ${social.name}`}
                src={social.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          {/* Divider */}
          <Separator className="w-full h-0.5" />

          {/* Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2024 Livestock Technologies. All rights reserved.
            </div>

            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
