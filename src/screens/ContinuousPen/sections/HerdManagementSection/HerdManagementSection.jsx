import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature list data for mapping
const features = [
  "Identify behavioral anomalies for proactive herd management.",
  "Enhance herd health with real-time monitoring insights.",
  "Optimize operations with actionable data-driven decisions.",
];

export const HerdManagementSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Transforming Herd Management with Continuous Pen Monitoring
                Technology
              </h2>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Our Continuous Pen Monitoring system ensures 24/7 observation of
                your herd&#39;s health. By leveraging advanced AI, we analyze
                behavior patterns to detect anomalies and optimize management
                practices.
              </p>
            </div>

            <Card className="w-full border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <ul className="flex flex-col gap-4 py-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckIcon className="w-4 h-4 text-[color:var(--color-schemes-color-scheme-1-text)]" />
                      <span className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <img
            className="flex-1 h-auto max-h-[640px] object-cover rounded-md"
            alt="Aerial view of cattle in a pen"
            src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-25.png"
          />
        </div>
      </div>
    </section>
  );
};
