import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = () => {
  // Feature data for mapping
  const features = [
    {
      title: "Financial Gains",
      description:
        "Maximize profitability through precise monitoring and actionable insights tailored for your operations.",
    },
    {
      title: "Operational Efficiency",
      description:
        "Streamline processes and reduce waste with our advanced feed intake monitoring technology.",
    },
  ];

  return (
    <section className="bg-[#335b2280] w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--heading-h3-font-weight)] [font-style:var(--heading-h3-font-style)]">
                Achieve Measurable Success with Our Innovative Livestock
                Management Solutions
              </h2>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--text-medium-normal-font-weight)] [font-style:var(--text-medium-normal-font-style)]">
                Our solutions are designed to deliver real financial returns and
                operational efficiency. Experience the difference with
                data-driven insights that enhance your cattle management.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-6 py-2">
                {features.map((feature, index) => (
                  <Card key={index} className="flex-1 bg-transparent border-0">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <h3 className="font-heading-h6 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--heading-h6-font-weight)] [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h3>
                      <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--text-regular-normal-font-weight)] [font-style:var(--text-regular-normal-font-style)]">
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
              className="w-full h-auto object-cover max-h-[640px]"
              alt="Real data about cattle on a tablet screen"
              src="https://c.animaapp.com/LEM5cvaF/img/real-data-about-cattle-on-a-tablet-screen.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
