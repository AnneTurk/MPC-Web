import { connect } from "react-redux";
import ShopOrderList from "../components/ShopOrderList.jsx";
import deleteTableItem from "../actions/deleteTableItem.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      console.log(tableId);

      dispatch(deleteTableItem(tableId, id));
    }
  };
};
const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ShopOrderList
);

export default OrderListContainer;
