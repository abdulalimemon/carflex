import { Outlet } from "react-router-dom";
import NavbarMain from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <NavbarMain />
      <Outlet />
    </>
  );
};

export default MainLayout;
