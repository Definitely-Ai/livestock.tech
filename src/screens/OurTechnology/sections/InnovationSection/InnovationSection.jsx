import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const InnovationSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 h-[640px]">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Innovative
              </span>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Revolutionizing Identification in Livestock Management
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Our Cow Nose ID technology utilizes non-invasive, camera-based
                  AI to provide secure and highly accurate identification of
                  individual cows. This groundbreaking approach ensures
                  unmatched traceability and enhances herd management.
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-0 rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent px-6 py-2.5 h-auto"
            >
              <Link to="/cow-nose-id-u8226-desktop">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Learn More
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex-1 h-[640px]">
            <img
              className="h-full w-full object-cover"
              alt="Cow with identification technology"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-17.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
