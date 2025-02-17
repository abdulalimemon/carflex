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
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" className="font-bold text-inherit">
              Car Flex
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 font-semibold"
          justify="center"
        >
          <NavbarItem>
            <NavLink to="/about-us">About Us</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#" aria-current="page">
              Customers
            </NavLink>
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
            <NavLink to="/login">
              <Button className="font-semibold">Log in</Button>
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <NavLink to="/sign-up">
              <Button className="bg-[#593CFB] font-semibold text-white">
                Sign up
              </Button>
            </NavLink>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
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
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
