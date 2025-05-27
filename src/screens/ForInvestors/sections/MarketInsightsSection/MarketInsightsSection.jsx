import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MarketInsightsSection = () => {
  const painPoints = [
    {
      title: "Major Pain Points",
      description:
        "We optimize feed costs, addressing up to 70% of operational expenditures.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our technology ensures traceability and efficiency, setting new industry standards.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-start gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="inline-flex items-center">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Invest
              </span>
            </div>

            <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
              Unlock the Future of Livestock Management
            </h2>
          </div>

          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-8 w-full">
              <p className="text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                Investing with us means addressing critical challenges in the
                livestock industry. Our innovative solutions tackle high
                operational costs and enhance traceability.
              </p>

              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col md:flex-row items-start gap-6 py-2 w-full">
                  {painPoints.map((point, index) => (
                    <Card
                      key={index}
                      className="flex-1 border-none shadow-none"
                    >
                      <CardContent className="p-0">
                        <h6 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h6-font-style)]">
                          {point.title}
                        </h6>
                        <p className="mt-4 text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                          {point.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-full h-auto max-h-[738px] object-cover rounded-md"
          alt="Livestock management technology"
          src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-31.png"
        />
      </div>
    </section>
  );
};
