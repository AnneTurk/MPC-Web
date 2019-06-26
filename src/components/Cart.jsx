import React from "react";
import "../index.css"
import "../styles/cart.css"
const Cart = () => {
    return (
        <div className='flex-container-row'>
        <section className='flex-container-column'>
            <list>
                <ul>
                <li className="flex-container-row product"><h2>Product</h2>&nbsp;<h2>Details</h2>&nbsp;<h2>Price</h2>&nbsp;<h2>Qty</h2>&nbsp;<h2>Total</h2></li>
                </ul>
            </list>
        </section>
        <section className='flex-container-column'>
        <div className="cartsummary">
        <h1 id="cartsummary">Cart Summary</h1>
        <br></br>
        <div className="flex-container-row info">
        <div>
            <p><span className="heading">Subtotal</span></p>
            <p><span className="heading">Shipping</span></p>
            <p><span className="heading">Tax</span></p>
            <p><span className="heading">Total</span></p>
        </div>
        <div>
            <p>&nbsp; placeholder</p>
            <p>&nbsp; placeholder</p>
            <p>&nbsp; placeholder</p>
            <p>&nbsp; placeholder</p>
        </div>
        </div>
        </div>
        <div>
            <br></br>
            <button type="submit">Order products</button>
        </div>
        </section>
        </div>
    );
  };
  
  export default Cart;