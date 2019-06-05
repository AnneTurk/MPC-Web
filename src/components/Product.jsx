import React from "react";
import "../index.css"

const Product = ({match}) => {
    return (
        <div>
            <h1>Product: {match.params.id}</h1>
        </div>
    );
  };
  
  export default Product;