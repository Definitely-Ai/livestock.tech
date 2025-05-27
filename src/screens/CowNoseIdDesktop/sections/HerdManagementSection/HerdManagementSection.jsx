import React from "react";

export const HerdManagementSection = () => {
  return (
    <section className="w-full bg-[color:var(--color-schemes-color-scheme-1-background)] py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row items-center gap-20 h-[640px]">
          <div className="flex-1 flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <span className="inline-flex items-center">
                <p className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Traceability
                </p>
              </span>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Revolutionizing Herd Management with Cow Nose ID
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Cow Nose ID offers unparalleled traceability, ensuring
                  effective disease control and enhanced herd management. With
                  verifiable data, you can trust the insights for better
                  decision-making.
                </p>
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Cow nose identification system showing a nose print being compared to an ID card"
            src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-12.png"
          />
        </div>
      </div>
    </section>
  );
};
