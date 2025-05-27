import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-center w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-none shadow-none bg-transparent w-full">
          <CardContent className="flex flex-col items-center gap-8 max-w-[var(--spacing-sizing-max-width-max-width-large)] mx-auto p-0">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-full text-center">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Innovative
                </span>
              </div>

              <div className="flex flex-col items-center gap-6 w-full">
                <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] w-full">
                  Transforming Livestock Management
                </h1>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] w-full">
                  Explore the technologies enhancing efficiency and
                  profitability in today&apos;s advanced feedlot operations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
