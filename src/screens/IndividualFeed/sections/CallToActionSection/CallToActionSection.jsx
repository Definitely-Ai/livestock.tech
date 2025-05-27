import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section
      className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/LEM5cvaF/img/cta---3--.png)",
      }}
    >
      <div className="flex flex-col items-start gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="w-full bg-transparent border-0 shadow-none">
          <CardContent className="flex flex-col items-start gap-8 p-0 max-w-[var(--spacing-sizing-max-width-max-width-large)]">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-[#faf6eb] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
                Stay Informed About Our Launch
              </h2>
              <p className="text-[#faf6eb] text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                Be the first to receive updates on our revolutionary Individual
                Feed Intake Monitoring system.
              </p>
            </div>

            <Button
              asChild
              variant="default"
              className="h-auto px-6 py-2.5 rounded-xl bg-primitives-color-neutral-lightest text-primitives-color-neutral-darkest shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            >
              <Link to="/contact-us-u8226-desktop">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
