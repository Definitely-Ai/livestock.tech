import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DataSolutionsSection = () => {
  const features = [
    {
      title: "Precision Nutrition",
      description:
        "Optimize feed costs and improve herd health with actionable data.",
    },
    {
      title: "Data Insights",
      description:
        "Transform raw data into valuable insights for better decision-making.",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-start gap-20">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                Revolutionizing Feed Efficiency with Individual Intake
                Monitoring Technology
              </h3>

              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Our Individual Feed Intake Monitoring system utilizes
                solar-powered stations to provide precise measurements of each
                animal&#39;s feed intake. This innovative approach enhances feed
                efficiency and profitability while enabling early detection of
                health issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-none">
                  <CardContent className="p-2">
                    <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {feature.title}
                    </h6>
                    <p className="mt-4 text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-4 h-auto px-6 py-2.5 rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
            >
              <Link to="/individual-feed-intake-monitoring-u8226-desktop">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Learn More
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-18.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
