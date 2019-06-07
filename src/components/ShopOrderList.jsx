import React from "react";
import "../styles/shopping.css"

const ShopOrderList = props => {
  if (props.selectedTable === null) return null;
  console.log(props);
  return (
    <div className="shoporderlist">
      {props.items.map((items, i) => {
        return (
          <div>
            <button onClick={() => props.onDelete(props.selectedTable, i)}>
              x
            </button>
            &nbsp; {items.name} | ${items.price}
          </div>
        );
      })}
    </div>
  );
};

export default ShopOrderList;