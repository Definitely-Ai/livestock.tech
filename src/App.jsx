import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { ContactUsDesktop } from "./screens/ContactUsDesktop";
import { ContactUsMobile } from "./screens/ContactUsMobile";
import { ContinuousPen } from "./screens/ContinuousPen";
import { ContinuousPenScreen } from "./screens/ContinuousPenScreen";
import { CowNoseIdDesktop } from "./screens/CowNoseIdDesktop";
import { CowNoseIdMobile } from "./screens/CowNoseIdMobile";
import { ForInvestors } from "./screens/ForInvestors";
import { ForInvestorsMobile } from "./screens/ForInvestorsMobile";
import { HomeDesktop } from "./screens/HomeDesktop";
import { HomeMobile } from "./screens/HomeMobile";
import { IndividualFeed } from "./screens/IndividualFeed";
import { IndividualFeedScreen } from "./screens/IndividualFeedScreen";
import { OurTechnology } from "./screens/OurTechnology";
import { OurTechnologyScreen } from "./screens/OurTechnologyScreen";

// Mobile detection component
const LandingRedirect = () => {
  const isMobile =
    window.innerWidth <= 768 ||
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return <Navigate to="/home-u8226-mobile" replace />;
  } else {
    return <Navigate to="/home-u8226-desktop" replace />;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingRedirect />,
  },
  {
    path: "/contact-us-u8226-desktop",
    element: <ContactUsDesktop />,
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
    path: "/for-investors-u8226-desktop",
    element: <ForInvestors />,
  },
  {
    path: "/continuous-pen-monitoring-u8226-desktop",
    element: <ContinuousPen />,
  },
  {
    path: "/our-technology-u8226-desktop",
    element: <OurTechnology />,
  },
  {
    path: "/home-u8226-desktop",
    element: <HomeDesktop />,
  },
  {
    path: "/contact-us-u8226-mobile",
    element: <ContactUsMobile />,
  },
  {
    path: "/home-u8226-mobile",
    element: <HomeMobile />,
  },
  {
    path: "/for-investors-u8226-mobile",
    element: <ForInvestorsMobile />,
  },
  {
    path: "/cow-nose-id-u8226-mobile",
    element: <CowNoseIdMobile />,
  },
  {
    path: "/continuous-pen-monitoring-u8226-mobile",
    element: <ContinuousPenScreen />,
  },
  {
    path: "/individual-feed-intake-monitoring-u8226-mobile",
    element: <IndividualFeedScreen />,
  },
  {
    path: "/our-technology-u8226-mobile",
    element: <OurTechnologyScreen />,
  },
  {
    path: "/*",
    element: <LandingRedirect />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
