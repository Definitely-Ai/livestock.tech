import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Join Us in Revolutionizing Livestock
                  </h2>

                  <p className="text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                    Discover how your investment can drive innovation in
                    livestock management and sustainability.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Button
                    asChild
                    className="h-auto px-6 py-2.5 bg-[color:var(--primitives-color-fern-frond)] rounded-xl shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
                  >
                    <Link to="/our-technology-u8226-desktop">
                      <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#faf6eb] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                        Learn More
                      </span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-auto px-6 py-2.5 rounded-xl border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
                  >
                    <Link to="/contact-us-u8226-desktop">
                      <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                        Contact
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              <img
                className="flex-1 h-[400px] object-cover rounded-md"
                alt="Livestock innovation"
                src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-33.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
