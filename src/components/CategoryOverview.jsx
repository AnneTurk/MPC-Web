import React from "react";
import "../styles/shopping.css";
import "../index.css";
import SubcategoryButton from './SubcategoryButton';
import { selectSubcategory } from '../actions/index'
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state)
  return{
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    }
  };


const CategoryOverview = connect(mapStateToProps, mapDispatchToProps)(SubcategoryButton);

  
export default (CategoryOverview);