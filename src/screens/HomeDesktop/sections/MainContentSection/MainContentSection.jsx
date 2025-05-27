import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  const featureCards = [
    {
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-2@2x.png",
      title: "Continuous Monitoring for Optimal Herd Health and Management",
      description:
        "Our 24/7 automated observation ensures your herd's health is always prioritized.",
      linkText: "Learn More",
      linkUrl: "/continuous-pen-monitoring-u8226-desktop",
    },
    {
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-3@2x.png",
      title: "Introducing Cow Nose ID: The Future of Animal Identification",
      description:
        "Experience secure and accurate identification through our innovative AI technology.",
      linkText: "Discover",
      linkUrl: "/cow-nose-id-u8226-desktop",
    },
    {
      image: "https://c.animaapp.com/LEM5cvaF/img/placeholder-image-4@2x.png",
      title:
        "Individual Feed Intake Monitoring: Precision Nutrition for Every Animal",
      description:
        "Optimize feed efficiency and boost profitability with precise intake measurements.",
      linkText: "Explore",
      linkUrl: "/individual-feed-intake-monitoring-u8226-desktop",
    },
  ];

  return (
    <section className="bg-primitives-color-black-lighter py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] flex justify-center">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] w-full gap-20">
        <h2 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] max-w-[768px] [font-style:var(--heading-h3-font-style)]">
          Revolutionizing Feedlot Management with Advanced Technology and
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureCards.map((card, index) => (
            <Card key={index} className="border-none bg-transparent">
              <CardContent className="p-0 flex flex-col gap-8">
                <img
                  className="w-full h-60 object-cover"
                  alt="Feedlot management technology"
                  src={card.image}
                />
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h5-font-style)]">
                      {card.title}
                    </h3>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    to={card.linkUrl}
                    className="inline-flex items-center gap-2 w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
                  >
                    {card.linkText}
                    <ChevronRightIcon className="w-6 h-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
