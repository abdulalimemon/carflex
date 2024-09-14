import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-condition";
import NotFound from "../pages/404";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import AdminLayout from "../components/layout/admin/AdminLayout";
import Admin from "../pages/admin/home";

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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Registration />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/home" />,
      },
      {
        path: "/admin/home",
        element: <Admin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
