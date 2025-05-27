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
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---youtube-6.svg",
    },
  ];

  // Legal links data
  const legalLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookies Settings", url: "#" },
  ];

  return (
    <footer className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-3.svg"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              className="font-text-small-semi-bold text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] font-[number:var(--text-small-semi-bold-font-weight)] tracking-[var(--text-small-semi-bold-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
              to="/contact-us-u8226-desktop"
            >
              Contact Us
            </Link>

            <Link
              className="font-text-small-semi-bold text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] font-[number:var(--text-small-semi-bold-font-weight)] tracking-[var(--text-small-semi-bold-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
              to="/our-technology-u8226-desktop"
            >
              Our Solutions
            </Link>
          </div>

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
          <Separator className="w-full h-0.5" />

          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2024 Livestock Technologies. All rights reserved.
            </span>

            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
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
