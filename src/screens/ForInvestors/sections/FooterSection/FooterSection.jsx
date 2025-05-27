import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Social media links data
  const socialLinks = [
    { icon: <FacebookIcon className="h-6 w-6" />, alt: "Facebook" },
    { icon: <InstagramIcon className="h-6 w-6" />, alt: "Instagram" },
    { icon: <TwitterIcon className="h-6 w-6" />, alt: "X" },
    { icon: <LinkedinIcon className="h-6 w-6" />, alt: "LinkedIn" },
    { icon: <YoutubeIcon className="h-6 w-6" />, alt: "YouTube" },
  ];

  // Footer links data
  const legalLinks = [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Service", url: "#" },
    { text: "Cookies Settings", url: "#" },
  ];

  return (
    <footer className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center gap-8 w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-13.svg"
            />
          </div>

          <nav className="flex items-start justify-center gap-8">
            <Link
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-small-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
              to="/contact-us-u8226-desktop"
            >
              Contact Us
            </Link>

            <Link
              className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-small-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
              to="/our-technology-u8226-desktop"
            >
              Our Solutions
            </Link>
          </nav>

          <div className="flex items-center justify-end gap-3 flex-1">
            {socialLinks.map((link, index) => (
              <a key={index} href="#" aria-label={link.alt}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <Separator className="w-full h-0.5" />

          <div className="flex flex-wrap items-start gap-6">
            <span className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2024 Livestock Technologies. All rights reserved.
            </span>

            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
