import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import Registration from "../../../pages/auth/Registration";

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setTheme } = useTheme();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        isBordered
        id="navbar-width"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link to="/" className="font-bold text-inherit">
              Car Flex
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to="/about-us">About Us</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
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
          <NavbarItem className="hidden lg:flex">
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Registration />
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                to="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
