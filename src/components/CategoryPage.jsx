import React from "react";
import "../styles/shopping.css";
import "../index.css";
import { connect } from "react-redux";
import { requestItems } from '../actions';
import CategoryMenu from "./CategoryMenu";
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
export class CategoryPage extends React.Component {

  componentDidMount() {
    requestItems();
  }

  render() {
    if (!this.props.items) {
      return <span>Items are loading...</span>
    }
    return (
      <div className="flex-container-row">
          {
            this.props.items.map(item => {
              return <button type='button' name="category" className="button">{item.category}</button>
            })
          }
          <div className="flex-container-row">
            <div>
              <CategoryMenu /> 
          </div>
          <div className="flex-container-column">
            <SortBar />
            </div>

          </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);