import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
          <div className="flex flex-col gap-4 flex-1">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
              Precision
            </span>
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Feed Intake Revolution
            </h1>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Transform your feedlot operations with our advanced AI-driven feed
              intake monitoring system. Gain precise insights into individual
              animal consumption to enhance efficiency and profitability.
            </p>

            <div className="flex">
              <Button
                asChild
                className="px-6 py-2.5 h-auto bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] rounded-xl shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              >
                <Link to="/contact-us-u8226-desktop">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Contact Us
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
