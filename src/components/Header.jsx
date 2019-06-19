import React from "react";
import NavTab from "./NavTab.jsx";
import '../styles/Navigation.css'
import "../index.css"

const NavBarHead = () => {
  return (
    <div className="headerbar">
          <NavTab to="/" icon="home" class="navtext firstelement"></NavTab> {/* -rubric65 */}  &nbsp;
          <NavTab to="/shopping"  icon="shopping-basket" class="navtext middle"></NavTab> {/* -rubric66 */}&nbsp;
          <NavTab to="/cart" label="" icon="shopping-cart" class="navtext lastelement"></NavTab> {/* -rubric67 */}&nbsp;
      </div>
  );
};

export default NavBarHead
