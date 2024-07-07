import { NavLink } from "react-router-dom";
import React from "react";
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive'}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive'}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
