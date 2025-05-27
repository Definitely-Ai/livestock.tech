import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const LivestockConditionsSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <Card className="flex-1 border-0 shadow-none">
            <CardContent className="p-0">
              <img
                className="w-full h-[640px] object-cover rounded-md"
                alt="Livestock in pen"
                src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-26.png"
              />
            </CardContent>
          </Card>

          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Comfort
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Optimize Your Livestock&#39;s Living Conditions
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Our Continuous Pen Monitoring system ensures that your
                  livestock thrive in optimal conditions. By tracking
                  temperature, humidity, and other critical factors, we help you
                  maintain a healthy and comfortable environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
