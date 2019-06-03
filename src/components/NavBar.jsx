import React from "react";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div>
          <NavTab to="/" label="Home"></NavTab> <br></br>
          <NavTab to="/shopping" label="Shopping"></NavTab> <br></br>
          <NavTab to="/product" label="Product"></NavTab>{" "} <br></br>
          <NavTab to="/cart" label="Cart"></NavTab> <br></br>
          <NavTab to="/contact" label="Contact"></NavTab> <br></br>
          <NavTab to="/about" label="About"></NavTab>
      </div>
  );
};

export default NavBar