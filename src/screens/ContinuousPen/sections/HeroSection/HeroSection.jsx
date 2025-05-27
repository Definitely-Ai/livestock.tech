import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  // Feature data for mapping
  const features = [
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-24.svg",
      title: "Real-Time Insights",
      description:
        "Stay informed with instant alerts on herd health and behavior changes.",
    },
    {
      icon: "https://c.animaapp.com/LEM5cvaF/img/icon---relume-24.svg",
      title: "Enhanced Management",
      description:
        "Make data-driven decisions to improve feedlot efficiency and animal welfare.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
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
                    24/7 Automated Feedlot Observation and Management
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Our advanced AI system ensures continuous monitoring of your
                    feedlot. This guarantees optimal herd health and management
                    at all times.
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
                        <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                          {feature.title}
                        </h6>
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
            className="flex-1 h-auto max-h-[640px] object-cover rounded-md"
            alt="Placeholder image"
            src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-23.png"
          />
        </div>
      </div>
    </section>
  );
};
