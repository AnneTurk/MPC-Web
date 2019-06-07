import React from "react";
import '../styles/shopping.css'

const ShopOverview = props => {
  var numTables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }
  return (
    <div className="shopoverview">
      <h1>Restaurant Title</h1>
      <h2>Tables Available: {numTables} /16</h2>
      <h2>Money Earned:{props.moneyEarned}</h2>
    </div>
  );
};

export default ShopOverview;
