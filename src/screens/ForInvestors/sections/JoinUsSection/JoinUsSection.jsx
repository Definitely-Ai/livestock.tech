import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const JoinUsSection = () => {
  return (
    <section className="w-full bg-[color:var(--color-schemes-color-scheme-1-background)] py-20 px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
              <div className="flex flex-col gap-6 flex-1">
                <h3 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                  Strengthening Market Presence: Our Canadian and American
                  Divisions Lead the Way
                </h3>

                <p className="text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                  With a strong presence in both Canada and the U.S., we
                  navigate diverse regulatory landscapes while maximizing market
                  opportunities. Our cross-border operations ensure compliance
                  and enhance our ability to deliver innovative solutions to
                  livestock producers across North America.
                </p>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-auto object-cover rounded-md"
                  alt="Placeholder image"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-32.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
