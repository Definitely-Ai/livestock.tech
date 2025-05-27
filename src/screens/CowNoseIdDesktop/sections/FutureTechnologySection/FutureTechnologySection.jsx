import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FutureTechnologySection = () => {
  // Feature data for mapping
  const features = [
    {
      title: "Enhanced Traceability",
      description:
        "Achieve precise tracking of each animal for improved health and management.",
    },
    {
      title: "Superior Security",
      description:
        "Protect your herd with advanced biometric identification technology you can trust.",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Experience the Future of Livestock Management with Cow Nose ID
                Technology
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Cow Nose ID revolutionizes herd management by providing
                unparalleled traceability and accuracy. This innovative solution
                ensures secure identification, enhancing operational efficiency
                and data integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-none bg-transparent py-2"
                >
                  <CardContent className="p-0">
                    <h6 className="font-heading-h6 text-[length:var(--heading-h6-font-size)] font-[number:var(--heading-h6-font-weight)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)] mb-4">
                      {feature.title}
                    </h6>
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
              className="w-full h-auto object-cover"
              alt="Cow nose identification technology demonstration"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-13.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
