import React from "react";
import { connect } from 'react-redux';
import "../index.css";
import "../styles/shopping.css";
import CategoryMenu from "./CategoryMenu";
import CategoryOverview from "./CategoryOverview";

  const Shopping = () => {
      return (
          <div className="flex-container-row">
              <CategoryMenu />
              <CategoryOverview/>
          </div>
      )
  };

  export default Shopping