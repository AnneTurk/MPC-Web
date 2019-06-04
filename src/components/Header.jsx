import React from "react";
import NavTab from "./NavTab.jsx";
import '../styles/Navigation.css'

const NavBarHead = () => {
  return (
    <div className="headerbar">
          <NavTab to="/" label="Home" className="navStyle"></NavTab> {/* -rubric65 */}  &nbsp;
          <NavTab to="/shopping" label="Shopping"></NavTab> {/* -rubric66 */}&nbsp;
          <NavTab to="/cart" label="Cart"></NavTab> {/* -rubric67 */}&nbsp;
      </div>
  );
};

export default NavBarHead
