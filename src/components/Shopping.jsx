import React from "react";
import "../index.css";
import "../styles/shopping.css";
import CategoryMenu from "./CategoryMenu";
import SortBar from "./SortBar";
import CategoryOverview from "./CategoryOverview";

  const Shopping = () => {
      return (
          <div className="flex-container-row">
              <CategoryMenu />
              <div className="flex-container-column">
              <SortBar />
              <CategoryOverview/>
              </div>
          </div>
      )
  };

  export default Shopping