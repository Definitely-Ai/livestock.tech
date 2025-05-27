import { CheckIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  const benefitItems = [
    "Increase profitability through precise feed management.",
    "Enhance animal health with real-time monitoring.",
    "Streamline operations for greater efficiency and productivity.",
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1 flex flex-col gap-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <span className="inline-block font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                      Profitability
                    </span>

                    <div className="space-y-6">
                      <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                        Unlock the Future of Livestock Management
                      </h2>

                      <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        Experience enhanced profitability and operational
                        efficiency with Livestock Technologies. Our innovative
                        solutions improve animal health and streamline feedlot
                        management.
                      </p>
                    </div>
                  </div>

                  <ul className="py-2 space-y-4">
                    {benefitItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <CheckIcon className="w-4 h-4 text-[color:var(--color-schemes-color-scheme-1-text)]" />
                        <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto px-6 py-2.5 rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
                  >
                    <Link to="/continuous-pen-monitoring-u8226-desktop">
                      <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                        Learn More
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-[640px] object-cover"
                  alt="Placeholder image"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-22.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
