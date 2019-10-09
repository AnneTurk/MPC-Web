import React from "react";
import "../index.css";
import "../styles/shopping.css";
import CategorySideMenu from "./CategorySideMenu";
import SortBar from "./SortBar";
import CategoryOverview from "./CategoryOverview";

  const Shopping = () => {
      return (
          <div className="flex-container-row">
              <CategorySideMenu />
              <div className="flex-container-column">
              <SortBar />
              <CategoryOverview/>
              </div>
          </div>
      )
  };

  export default Shopping