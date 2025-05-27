import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  // Data for feature cards
  const features = [
    {
      title: "Data-Driven",
      description:
        "Gain actionable insights to optimize feed efficiency and enhance herd health.",
    },
    {
      title: "Cost Savings",
      description:
        "Reduce waste and boost profitability with precise feed intake measurements.",
    },
  ];

  return (
    <section className="w-full bg-[color:var(--color-schemes-color-scheme-1-background)] py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading-h3 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                Unlock Precision Nutrition with Individual Feed Intake
                Monitoring Solutions
              </h2>
              <p className="font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Feed costs represent the largest expense in livestock
                operations, making precise monitoring essential. Our innovative
                solution provides accurate data on individual animal feed
                intake, transforming your feeding strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-none py-2">
                  <CardContent className="p-0 space-y-4">
                    <h3 className="font-heading-h6 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {feature.title}
                    </h3>
                    <p className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="Livestock feeding equipment"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-7.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
