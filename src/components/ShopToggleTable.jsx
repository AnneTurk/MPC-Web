import React from "react";

const ShopToggleTable = props => {
  return (
    <div>
      <button
        disabled={props.selectedTable === null}
        onClick={() => props.onToggle(props.selectedTable, props.tableData)}
      >
        {props.tableStatus ? "Check Out" : "Check In"}
      </button>
    </div>
  );
};

export default ShopToggleTable;
