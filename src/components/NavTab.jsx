import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Navigation.css';
import "../index.css"

const NavTab = props => {
console.log(props)
  return (
    <NavLink to={props.to} className={props.class}>
    <FontAwesomeIcon icon={props.icon}/> <h2>{props.label}</h2>
    </NavLink>
  );
};

export default NavTab;