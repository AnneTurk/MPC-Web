import React from "react";
import NavTab from "./NavTab.jsx";
import '../styles/Navigation.css';
import "../index.css"
const NavBarFoot = () => {
    return (
      <div className="footerbar">
            <NavTab to="/" label="Home" className="navStyle"></NavTab> {/*-rubric73*/} &nbsp;
            <NavTab to="/contact" label="Contact"></NavTab> {/*-rubric74*/}&nbsp;
            <NavTab to="/about" label="About"></NavTab> {/*-rubric75*/}&nbsp;
        </div>
    );
  };
  
  export default NavBarFoot