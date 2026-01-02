import "@/index.css";
import {
  Navbar as FBNavbar,
  NavbarBrand as FBNavbarBrand,
  NavbarCollapse as FBNavbarCollapse,
  NavbarLink as FBNavbarLink,
  NavbarToggle as FBNavbarToggle,
} from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "@/assets/Logo.svg";

function Header() {
  const { pathname } = useLocation(); // current URL path
  const isActive = (selection) => {
    return pathname === selection ?  "font-bold" : "font-normal";
  };

  return (
    <FBNavbar fluid>
      <FBNavbarBrand as={NavLink} to="/">
        <img
          src={logo}
          className="mr-3 h-12 sm:h-16"
          alt="Little Lemon logo"
        />
      </FBNavbarBrand>
      <FBNavbarToggle />
      <FBNavbarCollapse>
        <FBNavbarLink
          as={NavLink}
          to="/"
          className={isActive("/")}
        >
          Home
        </FBNavbarLink>
        <FBNavbarLink
          as={NavLink}
          to="/about"
          className={isActive("/about")}
        >
          About
        </FBNavbarLink>
        <FBNavbarLink
          as={NavLink}
          to="/menu"
          className={isActive("/menu")}
        >
          Menu
        </FBNavbarLink>
        <FBNavbarLink
          as={NavLink}
          to="/reservation"
          className={isActive("/reservation")}
        >
          Reservation
        </FBNavbarLink>
        <FBNavbarLink
          as={NavLink}
          to="/order"
          className={isActive("/order")}
        >
          Online Ordering
        </FBNavbarLink>
        <FBNavbarLink
          as={NavLink}
          to="/login"
          className={isActive("/login")}
        >
          Login
        </FBNavbarLink>
      </FBNavbarCollapse>
    </FBNavbar>
  );
}

export default Header;
