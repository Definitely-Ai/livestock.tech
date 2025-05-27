import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = () => {
  // Feature data for mapping
  const features = [
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-23.svg",
      title: "Our Competitive Edge in Technology",
      description:
        "With proprietary technologies like Cow Nose ID and Individual Feed Intake Monitoring, we set ourselves apart in the industry.",
    },
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-24.svg",
      title: "Building Trust Through Data Integrity",
      description:
        "Our commitment to high-ROI solutions fosters deep customer trust and enhances market penetration.",
    },
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-25.svg",
      title: "Join Us in Transforming the Industry",
      description:
        "Invest in a scalable platform poised for growth and innovation.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <header className="flex flex-col items-center gap-4 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="inline-flex items-center">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Invest
            </span>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
              Seize the Future of Livestock Management
            </h2>

            <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              The global demand for traceable and efficiently produced protein
              is on the rise. Our innovative solutions are designed to meet this
              demand head-on, ensuring sustainability and profitability.
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-16 w-full">
          <div className="flex flex-wrap gap-12 w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 min-w-[250px] border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-12 h-12"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <div className="flex flex-col items-center gap-6 w-full">
                    <h4 className="text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h4-font-style)]">
                      {feature.title}
                    </h4>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
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
