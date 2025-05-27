import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DataInsightsSection = () => {
  // Data for the feature cards
  const featureCards = [
    {
      title: "Harnessing Technology for Precision Feedlot Management",
      description:
        "Our solutions integrate seamlessly into real-world feedlot environments for maximum impact.",
      linkText: "Learn More",
      linkUrl: "/our-technology-u8226-desktop",
    },
    {
      title: "Real-Time Monitoring for Enhanced Herd Health",
      description:
        "Our 24/7 monitoring ensures proactive management and immediate response to health issues.",
      linkText: "Discover",
      linkUrl: "/continuous-pen-monitoring-u8226-desktop",
    },
    {
      title: "Precision Nutrition for Optimal Feed Efficiency",
      description:
        "Individual feed intake monitoring maximizes efficiency and reduces waste.",
      linkText: "Explore",
      linkUrl: "/individual-feed-intake-monitoring-u8226-desktop",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20">
        <div className="flex flex-col md:flex-row w-full gap-20">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-heading-h3 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
              Transforming Feedlot Management with Innovative AI-Powered
              Solutions
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className="font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Livestock Technologies revolutionizes feedlot management through
              cutting-edge AI solutions. Our technology enables continuous
              monitoring and precise data capture, ensuring optimal herd health
              and performance. Experience unparalleled insights that drive
              profitability and operational efficiency.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featureCards.map((card, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-heading-h5 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {card.title}
                    </h3>
                    <p className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
                      asChild
                    >
                      <Link
                        to={card.linkUrl}
                        className="flex items-center gap-2"
                      >
                        {card.linkText}
                        <ChevronRightIcon className="w-6 h-6" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
