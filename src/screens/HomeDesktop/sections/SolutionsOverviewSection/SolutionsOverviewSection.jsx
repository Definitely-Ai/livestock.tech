import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionsOverviewSection = () => {
  const features = [
    {
      title: "Data Clarity",
      description:
        "Unlock the potential of your data for better management and profitability.",
    },
    {
      title: "Smart Solutions",
      description:
        "Advanced analytics that enhance operational efficiency and decision-making.",
    },
  ];

  return (
    <section className="w-full bg-[color:var(--color-schemes-color-scheme-1-background)] py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row items-start gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="space-y-6">
              <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)] mt-[-1.00px]">
                Transforming Data into Actionable Intelligence
              </h2>
              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Our technology converts complex data into clear insights that
                drive informed decisions. Experience the power of actionable
                intelligence tailored for your operations.
              </p>
            </div>

            <div className="py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-none bg-transparent"
                  >
                    <CardContent className="p-0 space-y-4">
                      <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mt-[-1.00px]">
                        {feature.title}
                      </h6>
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-6.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
