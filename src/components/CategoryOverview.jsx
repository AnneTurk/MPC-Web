import React from "react";
import "../styles/shopping.css";
import "../index.css";
// import SubcategoryButton from './SubcategoryButton';
// import { selectSubcategory } from '../actions/index'
import { connect } from "react-redux";
import { fetchItems } from '../actions';

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
              return <span>{item.category}</span>
            })
          }
      </div>
    )
  }
};

  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);