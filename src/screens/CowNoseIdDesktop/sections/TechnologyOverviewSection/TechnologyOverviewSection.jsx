import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyOverviewSection = () => {
  return (
    <section className="w-full py-28 px-16 bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0 space-y-8">
                <img
                  className="w-20 h-20"
                  alt="Icon relume"
                  src="https://c.animaapp.com/LEM5cvaF/img/icon---relume-11.svg"
                />

                <div className="space-y-6">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Revolutionary Cow Nose Identification Technology
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Our Cow Nose ID technology offers a groundbreaking solution
                    for identifying cattle with unmatched accuracy. Utilizing
                    non-invasive, camera-based AI, it ensures secure and
                    reliable individual identification.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-11.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
