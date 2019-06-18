import React from "react";
import "../index.css";
import "../styles/shopping.css";
import CategoryMenu from "./CategoryMenu";
import CategoryOverview from "./CategoryOverview";

  const Shopping = () => {
      return (
          <div className="flex-container">
              <CategoryMenu />
              <CategoryOverview />
          </div>
      )
  }

  export default Shopping