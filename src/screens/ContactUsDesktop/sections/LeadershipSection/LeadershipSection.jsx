import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const LeadershipSection = () => {
  return (
    <section className="w-full flex justify-center py-20 bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="w-full max-w-[var(--spacing-sizing-container-container-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-start gap-20">
              <div className="flex-1">
                <div className="flex flex-col gap-6">
                  <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                    Our Leadership Team
                  </h2>
                  <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                    Our leadership team is dedicated to driving innovation in
                    livestock management. Connect with us to learn more about
                    our vision and solutions.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  className="w-full h-auto object-cover"
                  alt="Leadership team"
                  src="/images/leadership-team.jpg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
