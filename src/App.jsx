import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContactUsDesktop } from "./screens/ContactUsDesktop/ContactUsDesktop";
import { ContinuousPen } from "./screens/ContinuousPen/ContinuousPen";
import { CowNoseIdDesktop } from "./screens/CowNoseIdDesktop/CowNoseIdDesktop";
import { ForInvestors } from "./screens/ForInvestors/ForInvestors";
import { HomeDesktop } from "./screens/HomeDesktop/HomeDesktop";
import { IndividualFeed } from "./screens/IndividualFeed/IndividualFeed";
import { OurTechnology } from "./screens/OurTechnology/OurTechnology";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeDesktop />,
  },
  {
    path: "/home-u8226-desktop",
    element: <HomeDesktop />,
  },
  {
    path: "/individual-feed-intake-monitoring-u8226-desktop",
    element: <IndividualFeed />,
  },
  {
    path: "/cow-nose-id-u8226-desktop",
    element: <CowNoseIdDesktop />,
  },
  {
    path: "/contact-us-u8226-desktop",
    element: <ContactUsDesktop />,
  },
  {
    path: "/our-technology-u8226-desktop",
    element: <OurTechnology />,
  },
  {
    path: "/continuous-pen-monitoring-u8226-desktop",
    element: <ContinuousPen />,
  },
  {
    path: "/for-investors-u8226-desktop",
    element: <ForInvestors />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
