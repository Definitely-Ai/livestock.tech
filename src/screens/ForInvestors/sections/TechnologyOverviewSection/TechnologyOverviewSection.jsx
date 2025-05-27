import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyOverviewSection = () => {
  // Data for feature sections
  const features = [
    {
      title: "Data-Driven",
      description:
        "Transforming livestock management with actionable insights and robust technology for maximum profitability.",
    },
    {
      title: "Future Ready",
      description:
        "Our platform is designed for scalability and long-term growth in the AgTech sector.",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Image column */}
          <div className="flex-1">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <img
                  className="h-[640px] w-full object-cover rounded-md"
                  alt="Placeholder image"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-30.png"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content column */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Header section */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                    Innovative
                  </span>

                  <div className="flex flex-col gap-6">
                    <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                      Unleashing Potential: The Transformative Power of
                      Livestock Technologies
                    </h2>

                    <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Our scalable platform harnesses advanced data analytics to
                      drive efficiency. Experience recurring revenue streams
                      through innovative solutions that redefine livestock
                      operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features section */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h3>
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
