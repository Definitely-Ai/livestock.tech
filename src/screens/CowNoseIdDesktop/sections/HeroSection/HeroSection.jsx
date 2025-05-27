import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  // Feature list data for mapping
  const features = [
    "Secure, accurate identification for every animal.",
    "Non-invasive, camera-based AI technology.",
    "Enhancing traceability and herd management.",
  ];

  return (
    <section className="w-full bg-[color:var(--color-schemes-color-scheme-1-background)] py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Revolutionizing
                </span>

                <div className="flex flex-col gap-6">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Transforming Animal Identification with Innovation
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Traditional animal identification methods are often costly
                    and unreliable. Our Cow Nose ID technology offers a
                    revolutionary solution that ensures accuracy and efficiency.
                  </p>
                </div>
              </div>

              <Card className="border-none shadow-none bg-transparent py-2">
                <CardContent className="p-0 space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircleIcon className="w-4 h-4 text-[color:var(--color-schemes-color-scheme-1-text)]" />
                      <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Cow nose identification technology in action"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-10.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
