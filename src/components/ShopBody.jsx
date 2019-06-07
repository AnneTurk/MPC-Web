import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import ShopLayout from "./ShopLayout.jsx";
import ShopMenu from "./ShopMenu.jsx";
import "../styles/shopping.css"

const Body = () => {
  return (
    <div className="shopbody">
      <DetailsContainer />
      <ShopLayout />
      <ShopMenu />
    </div>
  );
};

export default Body;
