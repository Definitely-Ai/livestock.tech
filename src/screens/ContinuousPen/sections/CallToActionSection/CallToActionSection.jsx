import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="flex flex-col gap-6 w-full">
                  <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
                    Elevate Your Feedlot Management
                  </h2>
                  <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--text-medium-normal-font-weight)] [font-style:var(--text-medium-normal-font-style)]">
                    Experience 24/7 monitoring for optimal herd health and
                    management with our innovative solution.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    asChild
                    className="h-auto px-6 py-2.5 rounded-xl bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
                  >
                    <Link
                      to="/our-technology-u8226-desktop"
                      className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] font-[number:var(--text-regular-medium-font-weight)] [font-style:var(--text-regular-medium-font-style)]"
                    >
                      Learn More
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-auto px-6 py-2.5 rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
                  >
                    <Link
                      to="/contact-us-u8226-desktop"
                      className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[color:var(--primitives-color-neutral-darkest)] font-[number:var(--text-regular-medium-font-weight)] [font-style:var(--text-regular-medium-font-style)]"
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-[400px] object-cover rounded-md"
                  alt="Feedlot management system"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-28.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
