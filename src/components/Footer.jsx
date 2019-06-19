import React from "react";
import NavTab from "./NavTab.jsx";
import '../styles/Navigation.css';
import "../index.css"
const NavBarFoot = () => {
    return (
      <div className="footerbar">
            <NavTab to="/" icon="home" class="navtext firstelement" ></NavTab> {/*-rubric73*/} &nbsp;
            <NavTab to="/contact" label="Contact" class="navtext middle"></NavTab> {/*-rubric74*/}&nbsp;
            <NavTab to="/about" label="About" class="navtext lastelement"></NavTab> {/*-rubric75*/}&nbsp;
        </div>
    );
  };
  
  export default NavBarFoot