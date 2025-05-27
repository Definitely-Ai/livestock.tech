import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = () => {
  // Data for benefit cards to enable mapping
  const benefitCards = [
    {
      title: "How Our Technology Works",
      description: "Experience unparalleled precision in livestock management.",
    },
    {
      title: "Key Benefits of Our Monitoring System",
      description: "Optimize feed usage while ensuring animal health.",
    },
    {
      title: "Transform Your Operations with Real-Time Insights",
      description: "Empower your feedlot with actionable data today.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] pb-0.5 bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-center gap-[52px] w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col items-center gap-4 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="inline-flex items-center">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Precision
            </span>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="mt-[-1.00px] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
              Revolutionizing Feed Intake Monitoring for Livestock
            </h2>

            <p className="text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Our solar-powered stations utilize advanced sensors and integrated
              cameras to monitor each animal&#39;s feed intake with unmatched
              accuracy. This real-time data is analyzed by our AI algorithms,
              delivering actionable insights that enhance feed efficiency and
              facilitate early sickness detection.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {benefitCards.map((card, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <h4 className="mt-[-1.00px] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] w-full font-heading-h4 font-[number:var(--heading-h4-font-weight)] [font-style:var(--heading-h4-font-style)]">
                    {card.title}
                  </h4>
                  <p className="text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
