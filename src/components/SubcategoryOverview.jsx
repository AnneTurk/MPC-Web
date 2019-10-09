import React from "react";
import "../styles/shopping.css";
import "../index.css";
import { connect } from "react-redux";
import { requestItems } from '../actions';
import CategorySideMenu from "./CategorySideMenu";
import SortBar from './SortBar';


const mapStateToProps = state => {
  console.log(state)
  return{
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      requestItems: () => dispatch(requestItems())
    }
  };
export class SubCategoryOverview extends React.Component {

  componentDidMount() {
    requestItems();
  }

  render() {
    if (!this.props.items) {
      return <span>Items are loading... for subcategory</span>
    }
    return (
      <div className="flex-container-row">
          {
            this.props.items.map(item => {
              return <button type='button' name="category" className="button">{item.category}</button>
            })
          }
          <div className="flex-container-row">
          <div className="flex-container-column col-12">
            <SortBar />
            </div>
          </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryOverview);