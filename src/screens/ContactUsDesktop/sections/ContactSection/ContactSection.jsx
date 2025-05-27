import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  const contactInfo = {
    email: {
      sales: "Steve@livestock.tech",
      techSupport: "Zechariah@livestock.tech",
    },
    phone: {
      sales: {
        name: "Steve Myrick",
        number: "719-342-5683",
      },
      techSupport: {
        name: "Zechariah Myrick",
        number: "239-544-6990",
      },
    },
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-20 px-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] bg-[color:var(--color-schemes-color-scheme-1-background)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex flex-wrap gap-20 w-full">
          {/* Left column - Heading and description */}
          <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                Contact Us
              </h2>
              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                We work worldwide with divisions in the USA and Canada. Reach
                out anytime for assistance.
              </p>
            </div>
          </div>

          {/* Right column - Contact information */}
          <div className="flex flex-col w-full md:w-auto md:min-w-[500px] gap-6 py-2">
            {/* Email section */}
            <div className="flex items-start gap-4 w-full">
              <MailIcon className="w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  Email
                </h6>
                <div className="flex flex-col gap-1">
                  <p className="font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-link-font-size)] tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] [font-style:var(--text-regular-link-font-style)]">
                    <span className="text-[#000000]">Sales: </span>
                    <a
                      href={`mailto:${contactInfo.email.sales}`}
                      className="underline"
                    >
                      {contactInfo.email.sales}
                    </a>
                  </p>
                  <p className="font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-link-font-size)] tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] [font-style:var(--text-regular-link-font-style)]">
                    <span className="text-[#000000]">Tech Support: </span>
                    <a
                      href={`mailto:${contactInfo.email.techSupport}`}
                      className="underline"
                    >
                      {contactInfo.email.techSupport}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* PhoneIcon section */}
            <div className="flex items-start gap-4 w-full">
              <PhoneIcon className="w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  PhoneIcon
                </h6>
                <p className="font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-link-font-size)] tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] [font-style:var(--text-regular-link-font-style)]">
                  <span className="text-[#000000]">
                    Sales: {contactInfo.phone.sales.name}{" "}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone.sales.number}`}
                    className="underline"
                  >
                    {contactInfo.phone.sales.number}
                  </a>
                </p>
                <p className="font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-link-font-size)] tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] [font-style:var(--text-regular-link-font-style)]">
                  <span className="text-[#000000]">
                    Tech Support: {contactInfo.phone.techSupport.name}{" "}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone.techSupport.number}`}
                    className="underline"
                  >
                    {contactInfo.phone.techSupport.number}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company logo/image */}
        <Card className="w-full border-0 bg-[#faf6eb] rounded-lg overflow-hidden">
          <CardContent className="p-8 flex justify-center items-center">
            <img
              className="w-full max-w-[600px]"
              alt="Livestock Technologies Logo"
              src="https://c.animaapp.com/LEM5cvaF/img/placeholder-image-14.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
