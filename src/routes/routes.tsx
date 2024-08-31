import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-condition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />,
      },
    ],
  },

  {
    path: "*",
    element: <div>hello</div>,
  },
]);

export default router;
