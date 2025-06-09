import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ContactUsDesktop = () => {
  return (
    <div className="contact-us-desktop">
      <div className="navbar-2">
        <div className="container-4">
          <div className="company-logo-wrapper">
            <Link to="/home-u8226-desktop">
              <img
                className="company-logo-3"
                alt="Company logo"
                src="/img/company-logo-29.png"
              />
            </Link>
          </div>

          <div className="column-3">
            <Link className="link-text-2" to="/contact-us-u8226-desktop">
              Contact Us
            </Link>

            <div className="link-text-wrapper">
              <Link className="link-text-2" to="/for-investors-u8226-desktop">
                For Investors
              </Link>
            </div>

            <div className="link-text-wrapper">
              <Link className="link-text-2" to="/our-technology-u8226-desktop">
                Our Technology
              </Link>
            </div>

            <div className="link-text-wrapper">
              <Link
                className="link-text-2"
                to="/continuous-pen-monitoring-u8226-desktop"
              >
                Pen Monitoring
              </Link>
            </div>

            <div className="link-text-wrapper">
              <Link className="link-text-2" to="/cow-nose-id-u8226-desktop">
                Nose ID
              </Link>
            </div>

            <div className="link-text-wrapper">
              <Link
                className="link-text-2"
                to="/individual-feed-intake-monitoring-u8226-desktop"
              >
                Feed Intake
              </Link>
            </div>
          </div>

          <div className="actions-2">
            <Link to="/our-technology-u8226-desktop">
              <button className="button-5">
                <button className="button-6">Explore</button>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container-5">
          <div className="component-2">
            <div className="div-6">
              <div className="tagline-wrapper-3" />

              <div className="text-wrapper-7">
                Contact Livestock Technologies
              </div>
            </div>

            <div className="column-4">
              <p className="text-wrapper-8">
                We work globally, with divisions in the USA and Canada. Reach
                out anytime for inquiries or support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container-5">
          <div className="content-6">
            <div className="div-6">
              <div className="div-7">
                <div className="heading-6">Contact Us</div>

                <p className="text-6">
                  We work worldwide with divisions in the USA and Canada. Reach
                  out anytime for assistance.
                </p>
              </div>
            </div>

            <div className="row-5">
              <div className="content-7">
                <img
                  className="img-3"
                  alt="Icon envelope"
                  src="/img/icon-envelope.png"
                />

                <img
                  className="contact-info"
                  alt="Contact info"
                  src="/img/contact-info-1.png"
                />
              </div>

              <div className="content-7">
                <img
                  className="img-3"
                  alt="Icon phone"
                  src="/img/icon-phone.png"
                />

                <div className="contact-info-2">
                  <div className="heading-7">Phone</div>

                  <p className="link-2">
                    <span className="span">Sales: Steve Myrick </span>

                    <span className="text-wrapper-9">719-342-5683</span>
                  </p>

                  <p className="link-2">
                    <span className="span">
                      Tech Supoort: Zechariah Myrick{" "}
                    </span>

                    <span className="text-wrapper-9">239-544-6990</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="placeholder-image-2"
            alt="Placeholder image"
            src="/img/placeholder-image-66.png"
          />
        </div>
      </div>

      <div className="layout-2">
        <div className="component-wrapper">
          <div className="component-3">
            <div className="section-title-wrapper">
              <div className="div-7">
                <div className="div-7">
                  <div className="heading-6">Our Leadership Team</div>

                  <p className="text-6">
                    Our leadership team is dedicated to driving innovation in
                    livestock management. Connect with us to learn more about
                    our vision and solutions.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="placeholder-image-3"
              alt="Placeholder image"
              src="/img/placeholder-image-67.png"
            />
          </div>
        </div>
      </div>

      <div className="footer-2">
        <div className="container-5">
          <div className="content-8">
            <div className="logo">
              <img
                className="company-logo-4"
                alt="Company logo"
                src="/img/company-logo-29.png"
              />
            </div>

            <div className="links-2">
              <div className="text-wrapper-10">Contact Us</div>

              <div className="text-wrapper-10">About Us</div>

              <div className="text-wrapper-10">Our Solutions</div>

              <div className="text-wrapper-10">Careers</div>

              <div className="text-wrapper-10">Blog</div>
            </div>

            <div className="social-links-2">
              <img
                className="img-3"
                alt="Icon facebook"
                src="/img/icon-facebook.png"
              />

              <img
                className="img-3"
                alt="Icon instagram"
                src="/img/icon-instagram.png"
              />

              <img className="img-3" alt="Icon x" src="/img/icon-x.png" />

              <img
                className="img-3"
                alt="Icon linkedin"
                src="/img/icon-linkedin.png"
              />

              <img
                className="img-3"
                alt="Icon youtube"
                src="/img/icon-youtube.png"
              />
            </div>
          </div>

          <div className="credits-2">
            <img className="divider-2" alt="Divider" src="/img/divider.png" />

            <div className="row-6">
              <p className="text-wrapper-11">
                © 2025 Livestock Technologies. All rights reserved.
              </p>

              <div className="text-wrapper-12">Privacy Policy</div>

              <div className="text-wrapper-12">Terms of Service</div>

              <div className="text-wrapper-12">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
