import React from "react";

export const HeaderSection = () => {
  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="w-[60px] h-6" />
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Contact Livestock Technologies
            </h1>
          </div>
          <div className="flex-1">
            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              We work globally, with divisions in the USA and Canada. Reach out
              anytime for inquiries or support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
