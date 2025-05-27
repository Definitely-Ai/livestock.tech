import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = () => {
  // Data for testimonial cards
  const testimonialData = [
    {
      title:
        "Experienced Vision: Committed to transforming livestock management through advanced technology.",
      description:
        "Our robust solutions are designed to address the industry's most pressing challenges.",
    },
    {
      title:
        "Market Ready: Positioned for substantial growth and transformative industry impact.",
      description:
        "We are strategically aligned to capitalize on emerging opportunities in AgTech.",
    },
    {
      title:
        "Innovative Solutions: Pioneering technology that sets us apart in the market.",
      description:
        "Our unique offerings provide significant advantages in efficiency and traceability.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <h3 className="text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] max-w-[768px] [font-style:var(--heading-h3-font-style)]">
          Defensible Technology: Leading the way with innovative, patent-pending
          solutions.
        </h3>

        <div className="flex flex-col w-full">
          <div className="flex flex-wrap justify-center gap-12 w-full">
            {testimonialData.map((item, index) => (
              <Card
                key={index}
                className="flex-1 min-w-[250px] bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-8 p-0">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h5 className="text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h5-font-style)]">
                      {item.title}
                    </h5>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {item.description}
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
