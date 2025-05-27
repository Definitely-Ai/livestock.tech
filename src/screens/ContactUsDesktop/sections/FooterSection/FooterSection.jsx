import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    { title: "Contact Us", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Our Solutions", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Blog", href: "#" },
  ];

  // Social media links data
  const socialLinks = [
    { icon: <FacebookIcon className="w-6 h-6" />, label: "Facebook" },
    { icon: <InstagramIcon className="w-6 h-6" />, label: "Instagram" },
    { icon: <TwitterIcon className="w-6 h-6" />, label: "X" },
    { icon: <LinkedinIcon className="w-6 h-6" />, label: "LinkedIn" },
    { icon: <YoutubeIcon className="w-6 h-6" />, label: "YouTube" },
  ];

  // Footer links data
  const footerLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center gap-8 self-stretch w-full">
          {/* Logo */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="https://c.animaapp.com/LEM5cvaF/img/company-logo-7.svg"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-start justify-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center justify-end gap-3 flex-1">
            {socialLinks.map((social, index) => (
              <a key={index} href="#" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          <Separator className="w-full h-0.5" />

          <div className="flex items-start gap-6 flex-wrap">
            <span className="w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2025 Livestock Technologies. All rights reserved.
            </span>

            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
