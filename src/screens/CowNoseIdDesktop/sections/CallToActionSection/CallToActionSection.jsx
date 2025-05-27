import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Stay Tuned for Cow Nose ID
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Be among the first to experience the revolutionary Cow Nose ID
              technology. Sign up now to receive exclusive updates on its launch
              and availability.
            </p>

            <div>
              <Button
                asChild
                className="bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] rounded-xl shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d] h-auto"
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
