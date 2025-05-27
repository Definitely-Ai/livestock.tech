import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <img
                className="w-20 h-20"
                alt="Icon relume"
                src="https://c.animaapp.com/LEM5cvaF/img/icon---relume-12.svg"
              />

              <div className="flex flex-col gap-6">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Continuous Pen Monitoring for Optimal Herd Health
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Our Continuous Pen Monitoring system provides 24/7 automated
                  observation, ensuring the health and management of your herd.
                  With real-time insights, you can make informed decisions to
                  enhance productivity and welfare.
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-fit rounded-xl border-2 border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent px-6 py-2.5"
            >
              <Link to="/continuous-pen-monitoring-u8226-desktop">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Learn More
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-auto max-h-[640px] object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-16.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
