import React from "react";
import "../styles/shopping.css";
import "../index.css";
import {Link} from 'react-router-dom';
import SubcategoryButton from './SubcategoryButton';
import '../actions/requestProducts.json'

class CategoryOverview extends React.Component {
    render(){
      const rows = [];
      this.props.subcategories.forEach((subcategory)=> {
        rows.push(<SubcategoryButton subcategory={subcategory}/>)
      })
        return ( 
            <div className="col-9 overview ">
              <SubcategoryButton subcategories={this.props.subcategories} />
            </div>
    );
  }
}; 
  
export default (CategoryOverview);