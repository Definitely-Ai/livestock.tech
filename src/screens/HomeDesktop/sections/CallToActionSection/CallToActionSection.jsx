import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex justify-center w-full">
        <Card className="border-none shadow-none w-full max-w-[var(--spacing-sizing-container-container-large)]">
          <CardContent className="p-0">
            <div className="flex flex-col gap-8 max-w-[var(--spacing-sizing-max-width-max-width-large)]">
              <div className="flex flex-col gap-6">
                <h2 className="text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
                  Transform Your Operations Today
                </h2>
                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Discover how our innovative solutions can enhance your
                  livestock management and investment potential.
                </p>
              </div>

              <Link to="/contact-us-u8226-desktop">
                <Button className="h-auto px-6 py-2.5 rounded-xl bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] font-text-regular-medium shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]">
                  Contact
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
