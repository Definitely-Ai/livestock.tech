import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 w-full">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6 w-full">
              <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Transform Your Feedlot Management with AI
              </h1>
              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Unlock the potential of your cattle operations with our
                AI-driven solutions. Experience smarter, faster, and more
                profitable management through precise data insights.
              </p>
            </div>
            <div className="flex items-start">
              <Button className="px-6 py-2.5 h-auto bg-[color:var(--primitives-color-fern-frond)] text-[#faf6eb] rounded-xl shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]">
                Explore
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-[600px] object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
