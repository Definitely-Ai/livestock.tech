import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MonitoringSolutionsSection = () => {
  const features = [
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-24.svg",
      title: "Precision Measurement with Advanced Sensors and Cameras",
      description:
        "Our advanced sensors and cameras provide accurate, individual feed intake data.",
      cta: "Learn More",
    },
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-6.svg",
      title: "Real-Time Data Analysis Powered by AI for Actionable Insights",
      description:
        "Leverage AI-driven analysis to gain immediate insights into feed consumption patterns.",
      cta: "Sign Up",
    },
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-23.svg",
      title:
        "Weather-Resistant Design for Reliable Operation in All Conditions",
      description:
        "Our system is built to withstand harsh weather, ensuring uninterrupted monitoring.",
      cta: "Contact",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Revolutionize Feed Efficiency with Individual Feed Intake
                Monitoring Solutions
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Our Individual Feed Intake Monitoring system is designed to
                optimize feed usage and improve herd health. With solar-powered,
                weather-resistant technology, it ensures reliable performance in
                any environment. Experience real-time insights that empower you
                to make informed decisions for your cattle operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <img
                      className="w-12 h-12"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                    <h3 className="font-heading-h5 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                      {feature.title}
                    </h3>
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                      {feature.description}
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[color:var(--primitives-color-neutral-darkest)]"
                    >
                      {feature.cta}
                      <ChevronRightIcon className="ml-2 h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
