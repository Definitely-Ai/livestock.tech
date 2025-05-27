import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-1.svg",
      title: "Smart Monitoring",
      description:
        "Continuous observation ensures optimal herd health and management throughout the day.",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-1.svg",
      title: "Precision Feeding",
      description:
        "Individual intake data enhances feed efficiency and boosts overall profitability.",
    },
  ];

  return (
    <section className="bg-[#40722b80] py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Innovative Solutions for Modern Feedlot Management Challenges
              </h2>
              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Our advanced technology addresses the pressing challenges faced
                by feedlot operations today. With a focus on efficiency and
                profitability, we empower farmers to make informed decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
              {features.map((feature) => (
                <Card key={feature.id} className="border-0 bg-transparent">
                  <CardContent className="p-0 flex flex-col gap-4">
                    <img
                      className="w-12 h-12"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                    <h3 className="font-heading-h6 text-[length:var(--heading-h6-font-size)] font-[number:var(--heading-h6-font-weight)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                      {feature.title}
                    </h3>
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Feedlot management"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
