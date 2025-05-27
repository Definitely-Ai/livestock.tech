import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FutureManagementSection = () => {
  // Data for the cards to enable mapping
  const technologyCards = [
    {
      id: 1,
      tagline: "Insights",
      title: "Transforming Data into Actionable Insights",
      description: "Empowering decisions with reliable, clear data.",
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-19@2x.png",
      imagePosition: "right",
    },
    {
      id: 2,
      tagline: "ROI",
      title: "Proven Financial Benefits",
      description:
        "Solutions that enhance profitability and operational efficiency.",
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-20@2x.png",
      imagePosition: "bottom",
    },
    {
      id: 3,
      tagline: "Performance",
      title: "Maximize Your Gains",
      description: "Invest in solutions that drive measurable results.",
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-21@2x.png",
      imagePosition: "bottom",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        {/* Header section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <Badge
            className="font-heading-tagline text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] bg-transparent"
            variant="outline"
          >
            Technology
          </Badge>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)] w-full">
              Innovative Data Solutions
            </h2>

            <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] w-full">
              Harnessing AI for smarter livestock management.
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap gap-8 w-full">
            {technologyCards.map((card) => (
              <Card
                key={card.id}
                className={`flex ${card.imagePosition === "right" ? "flex-row" : "flex-col"} border-2 border-solid border-[color:var(--color-schemes-color-scheme-1-border)] bg-[color:var(--color-schemes-color-scheme-1-foreground)] rounded-[var(--UI-styles-radius-medium)] overflow-hidden ${card.imagePosition === "right" ? "w-[644px]" : "flex-1"}`}
              >
                <CardContent
                  className={`flex flex-col items-start gap-6 p-6 ${card.imagePosition === "right" ? "flex-1" : "w-full"}`}
                >
                  <div className="flex flex-col items-start gap-2 w-full">
                    <Badge
                      className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] bg-transparent"
                      variant="outline"
                    >
                      {card.tagline}
                    </Badge>

                    <div className="flex flex-col items-start gap-2 w-full">
                      <h5 className="text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h5-font-style)] w-full">
                        {card.title}
                      </h5>

                      <p className="text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)] w-full">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {card.imagePosition === "right" ? (
                  <div className="flex-1 h-full">
                    <img
                      className="w-full h-full object-cover"
                      alt={`${card.title} illustration`}
                      src={card.image}
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <img
                      className="w-full h-[171px] object-cover"
                      alt={`${card.title} illustration`}
                      src={card.image}
                    />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
