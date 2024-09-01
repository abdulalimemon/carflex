import { Outlet } from "react-router-dom";
import NavbarMain from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
