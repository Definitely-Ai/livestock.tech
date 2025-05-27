import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto gap-20">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0 flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-6">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Coming Soon
            </h1>
            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Introducing Cow Nose ID: Revolutionizing livestock identification
              with cutting-edge digital biometrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
