import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyOverviewSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex flex-col items-start gap-6 flex-1">
            <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
              Transform Your Feed Management with Individual Intake Monitoring
              Solutions
            </h3>

            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Our Individual Feed Intake Monitoring system empowers you to
              optimize feed efficiency and detect health issues early. With
              actionable data on each animal&#39;s intake, you can make informed
              decisions that enhance profitability and reduce waste.
            </p>
          </div>

          <Card className="flex-1 bg-[#f5f0e0] border-none">
            <CardContent className="flex items-center justify-center h-[640px] p-8">
              <h2 className="text-4xl font-bold text-[#40722b] text-center">
                TRUSTWORTHY CATTLE INSIGHTS
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
