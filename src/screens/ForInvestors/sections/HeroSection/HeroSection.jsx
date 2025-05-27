import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  const featureData = [
    {
      title: "Critical Solutions",
      description:
        "Revolutionizing feed management and animal identification for smarter cattle operations.",
    },
    {
      title: "Investment Opportunity",
      description:
        "Join us in shaping the future of livestock technology and sustainability.",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-20 w-full">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Innovative
                </span>

                <div className="flex flex-col gap-6">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Transforming Livestock Management for a Sustainable Future
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Livestock Technologies addresses inefficiencies in the
                    livestock industry with cutting-edge solutions. Our
                    innovative technology enhances productivity and
                    profitability while ensuring traceability.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                {featureData.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-none bg-transparent"
                  >
                    <CardContent className="p-0 flex flex-col gap-4">
                      <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h6>
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent h-auto px-6 py-2.5"
              >
                <Link to="/our-technology-u8226-desktop">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Learn
                  </span>
                </Link>
              </Button>

              <Button asChild variant="ghost" className="rounded-xl h-auto p-0">
                <Link
                  to="/contact-us-u8226-desktop"
                  className="flex items-center gap-2"
                >
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Connect
                  </span>
                  <ChevronRightIcon className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Livestock farmer with cattle"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-29.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
