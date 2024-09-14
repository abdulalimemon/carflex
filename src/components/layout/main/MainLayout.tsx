import { Outlet } from "react-router-dom";
import NavbarMain from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Footer />
      <BackToTop />
      <ScrollToTop />
      <Toaster />
    </>
  );
};

export default MainLayout;
