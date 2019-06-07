import React from "react";
import "../styles/shopping.css"

const ShopOrderButton = props => {

  return (
    <div>
      <button className="shoporderbutton"
        disabled={
          props.selectedTable === null ||
          props.tableStatusData[props.selectedTable] === false
        }
        onClick={() =>
          props.onAdd(props.name, props.price, props.selectedTable)
        }

      >
        ${props.price} {props.name}
      </button>
    </div>
  );
};

export default ShopOrderButton;
