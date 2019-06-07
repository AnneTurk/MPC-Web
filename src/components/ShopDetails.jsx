import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import ToggleTableContainer from "../containers/ToggleTableContainer.js";
import "../styles/shopping.css"

const ShopDetails = props => {

  var total = 0;
  if (props.selectedTable !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div className="shopdetails">
      <h2>Table #: {props.selectedTable}</h2>
      <ToggleTableContainer />
      <h2>Bill Total: {total}</h2>
      <h2>Orders: </h2>
      <OrderListContainer />
    </div>
  );
};

export default ShopDetails;
