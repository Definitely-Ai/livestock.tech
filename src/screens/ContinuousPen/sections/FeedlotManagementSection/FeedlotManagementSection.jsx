import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeedlotManagementSection = () => {
  const features = [
    {
      title: "Real-Time Insights",
      description:
        "Immediate alerts for health issues, ensuring timely interventions and improved herd welfare.",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-22.svg",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Leverage actionable insights for informed management choices that boost profitability.",
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-22.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Monitoring
                </span>

                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Transform Your Herd Management with Precision
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Continuous Pen Monitoring ensures optimal herd health
                    through 24/7 automated observation. Stay ahead of potential
                    issues and enhance management efficiency.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-none bg-transparent"
                  >
                    <CardContent className="p-2">
                      <div className="flex flex-col items-start gap-4">
                        <img
                          className="w-12 h-12"
                          alt="Feature icon"
                          src={feature.icon}
                        />
                        <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                          {feature.title}
                        </h3>
                        <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover rounded-md"
            alt="Cattle in feedlot"
            src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-27.png"
          />
        </div>
      </div>
    </section>
  );
};
