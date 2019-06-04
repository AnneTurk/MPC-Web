import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css';
import "../index.css"
const NavTab = props => {

  return (
    <NavLink to={props.to} className="navtext">
      {props.label}
    </NavLink>
  );
};

export default NavTab;