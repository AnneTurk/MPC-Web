import { connect } from "react-redux";
import ShopTableButton from "../components/ShopTableButton.jsx";
import selectTable from "../actions/selectTable.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(selectTable(id));
    }
  };
};
const TableButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  ShopTableButton
);

export default TableButtonContainer;
