import { connect } from "react-redux";
import ShopDetails from "../components/ShopDetails.jsx";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const DetailsContainer = connect(mapStateToProps, null)(ShopDetails);

export default DetailsContainer;
