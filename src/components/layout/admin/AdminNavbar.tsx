import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setTheme } = useTheme();

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        isBordered
        id="navbar-width"
      >
        <NavbarContent className="lg:hidden">
          <NavbarBrand>
            <Link to="/" className="font-bold text-inherit">
              Car Flex
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex items-center justify-center mr-3">
            <IoMdSunny
              className="absolute  h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
            <IoMdMoon
              className="absolute  h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link to="/admin/home">Dashboard</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/admin/manage-cars">Manage Cars</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/admin/manage-bookings">Manage Bookings</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/admin/manage-return-cars">Manage Return Cars</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/admin/user-management">User Management</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
