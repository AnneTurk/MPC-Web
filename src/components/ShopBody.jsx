import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.jsx";
import Menu from "./Menu.jsx";
import "../styles/shopping.css"

const Body = () => {e
  return (
    <div className="shopbody">
      <DetailsContainer />
      <Layout />
      <Menu />
    </div>
  );
};

export default Body;
