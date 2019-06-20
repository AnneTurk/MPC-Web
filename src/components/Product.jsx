import React from "react";
import {Link} from "react-router-dom"
import "../index.css";

class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: [],
        subcategories: []
      };
    }

    componentDidMount() {
      fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json",{
        method: 'GET'
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              categories: result,
              subcategories: result.subcategories
            }); 
            console.log(result);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log(error)
          }
        )
        console.log(this)
        }
    render() {
      const { error, isLoaded, categories} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div>
          { categories.map(category => (
            <h2 key={category.category}>{category.category}</h2>
            ))}          
        </div> 
        );
      }
    }
  }


const Product = () => {
    return (
        <div>
            <h1>Product: </h1><p id="category"/>
            <Products />
        </div>
    );
  };
  
export default Product;