import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="bg-primitives-color-metallic-bronze-light py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-6">
                <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--heading-h3-font-weight)] [font-style:var(--heading-h3-font-style)]">
                  Revolutionizing Feedlot Management with Smart Data Capture and
                  Reliable Technology
                </h3>
                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--text-medium-normal-font-weight)] [font-style:var(--text-medium-normal-font-style)]">
                  Our meticulously trained AI and ruggedized technology ensure
                  dependable performance in the field. Experience the power of
                  precise data capture that drives smarter decisions and
                  enhances herd management.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-full md:w-[517px] h-auto object-cover rounded-md"
              alt="Feedlot management technology in action"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-5.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
