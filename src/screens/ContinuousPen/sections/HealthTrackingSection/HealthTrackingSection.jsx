import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HealthTrackingSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 h-[640px]">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="inline-flex items-center">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Health
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Proactive Health Tracking for Your Herd
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Our Continuous Pen Monitoring system ensures you detect early
                  signs of illness, stress, or injury in your cattle. With
                  real-time data and alerts, you can intervene promptly to
                  minimize losses and maintain optimal herd well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <img
                  className="h-[640px] w-full object-cover"
                  alt="Cattle monitoring system on tablet"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-24.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
