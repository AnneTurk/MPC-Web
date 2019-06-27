import React from "react";
import "../styles/shopping.css";
import "../index.css";
// import SubcategoryButton from './SubcategoryButton';
// import { selectSubcategory } from '../actions/index'
import { connect } from "react-redux";
import { fetchItems } from '../actions';
import SubcategoryButton from "./SubcategoryButton";

const mapStateToProps = state => {
  console.log(state)
  return{
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchItems: () => dispatch(fetchItems())
    }
  };


class CategoryOverview extends React.Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    if (!this.props.items) {
      return <span>Items are loading...</span>
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
          {
            this.props.items.map(item => {
              return <button type='button' name="category" className="button">{item.category}</button>
            })
          }
      </div>
    )
  }
};

  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);