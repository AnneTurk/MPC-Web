import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/NavTab.css';

const NavTab = props => {

  return (
    <NavLink to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;