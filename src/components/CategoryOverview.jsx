import React from "react";
import "../styles/shopping.css";
import "../index.css";
import { connect } from "react-redux";
import { fetchItems} from '../actions';
import { NavLink } from "react-router-dom";


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
      <div className="flex-container-row col-9">
          {
            this.props.items.map(item => {
              return <NavLink to={"/shopping/"+item.category} className="button">{item.category}</NavLink>
            })
          }
      </div>
    )
  }
};

  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);