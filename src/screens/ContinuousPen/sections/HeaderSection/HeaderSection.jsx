import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = () => {
  return (
    <header
      className="w-full bg-cover bg-center py-28 px-16 relative"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/LEM5cvaF/img/header---65--.png)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8 w-full max-w-[768px]">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full flex justify-center">
              <span className="font-heading-tagline text-[#faf6eb] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Monitoring
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="font-heading-h1 text-[#faf6eb] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-center">
                24/7 Herd Management
              </h1>

              <p className="font-text-medium-normal text-[#faf6eb] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-center [text-shadow:0px_4px_4px_#00000040]">
                Ensure optimal herd health with continuous, automated monitoring
                for better management and decision-making.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button
              asChild
              className="bg-primitives-color-neutral-lightest text-primitives-color-neutral-darkest rounded-xl shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d] h-auto px-6 py-2.5"
            >
              <Link
                className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
                to="/contact-us-u8226-desktop"
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
