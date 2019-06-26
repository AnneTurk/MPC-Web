import React from "react";
import "../styles/product.css"
import "../index.css"

const Product = () => {
    return (
        <div className="flex-container-row">
            <div className="flex-container-column col-6">
                <img src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png"/>
            </div>
            <div className="flex-container-column col-6">
            <h1>Product:</h1>
            <br/>
            <p>Product Rating</p>
            <p>Product Price</p>
            <p>Product Description</p>
            <p>Qty:<input type='number' className="numberinput"></input></p>
            <br/>
            <button type="submit">Add to Cart</button>
            </div>
        </div>
    );
  };
  
export default Product;