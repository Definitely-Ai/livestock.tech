import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const InsightsSection = () => {
  // Data for bullet points to enable mapping
  const benefitPoints = [
    "Maximize feed efficiency and reduce operational costs.",
    "Early sickness detection through intake monitoring.",
    "Transform your feedlot operations with actionable data.",
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row gap-20">
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex flex-col gap-6">
                  <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                    Revolutionizing Feed Efficiency with Individual Intake
                    Monitoring Technology
                  </h3>

                  <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                    Our innovative solar-powered stations utilize advanced
                    sensors and cameras to track individual feed intake. This
                    technology ensures precise measurement, leading to optimized
                    nutrition and increased profitability.
                  </p>
                </div>

                <ul className="flex flex-col gap-4 py-2">
                  {benefitPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckIcon className="w-4 h-4 text-[color:var(--color-schemes-color-scheme-1-text)]" />
                      <span className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-auto object-cover max-h-[640px]"
                  alt="Solar-powered feed monitoring station"
                  src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-8.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
