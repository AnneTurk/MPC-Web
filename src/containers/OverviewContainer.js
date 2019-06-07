import { connect } from "react-redux";
import ShopOverview from "../components/ShopOverview.jsx";

const mapStateToProps = state => {
  return {
    moneyEarned: state.moneyEarned,
    tableStatusData: state.tableStatusData
  };
};

const OverviewContainer = connect(mapStateToProps, null)(ShopOverview);

export default OverviewContainer;
