import React from "react";
import "../styles/shopping.css"

const ShopTableButton = props => {
    var style ={
        border: props.selectedTable === props.id ? "1px solid blue" : null,
        backgroundColor: props.tableStatusData[props.id] ? "red" : null
    }
  return (
    <div>
      <button onClick={() => props.onSelect(props.id)} style={style} className="shoptablebutton">
        {props.id}
      </button>
    </div>
  );
};

export default ShopTableButton;