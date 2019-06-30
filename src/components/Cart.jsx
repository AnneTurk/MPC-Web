import React from "react";
import "../styles/contact.css"
import "../index.css"
import "../styles/cart.css"

function validateForm() {
    var newline = "\r\n"
    var name = document.forms["shippingForm"]["name"].value;
    var address = document.forms["shippingForm"]["address"].value;
    var city = document.forms["shippingForm"]["city"].value;
    var phone = document.forms["shippingForm"]["phone"].value;
    var totalCost = "$10.00"
    var text = "These are your shipping details: "+newline+"name: " + name + newline + "Adress: " + address + newline + "City: "+ city + newline + "Phone: "+ phone + newline + "Total cost: " + totalCost ;
{/*rubric 52 */}
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (address == "") {
        alert("Address must be filled out");
        return false;
      }
      if (city == "") {
        alert("city must be filled out");
        return false;
      }
      if (phone == "") {
        alert("phone must be filled out");
        return false;
      }
/*rubric51 */
    else {
        alert(text)
}} 

const Cart = () => {
    return (
        <div>
        <div className='flex-container-row'>
        <div className="col-1"></div>
        <section className='flex-container-column col-5'>
            <list className="product">
                <ul>
                <li className="flex-container-row"><h2>Product</h2>&nbsp;<h2>Details</h2>&nbsp;<h2>Price</h2>&nbsp;<h2>Qty</h2>&nbsp;<h2>Total</h2></li>
                </ul>
            </list>
        </section>
        <section className='flex-container-column col-5'>
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
            <p>&nbsp; $10.00 </p>
            <p>&nbsp; 10%</p>
            <p>&nbsp; placeholder</p>
        </div>
        </div>
        </div>
        </section>
        <div className="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <section className="form">
                <div className="flex-container-column col-1"></div>
                    <form name="shippingForm" className="shippingform col-10"> {/*rubric48 */}
                    <h1>Enter Shipping Details</h1>
                    <br/>
                        <label>Name:</label><br/>
                        <input type="text" name="name" id="nameinput" placeholder="John Doe" ></input><br/><br/>
                        <label>Address:</label><br/>
                        <input type="text" name="address" id="addressinput" placeholder="Sesamestreet 1"></input><br/><br/>
                        <label>City:</label><br/>
                        <input type="text" name="city" id="cityinput" placeholder="New York"></input><br/><br/>
                        <label>Telephone:</label><br/>
                        <input type="tel" name="phone" id="phoneinput" placeholder="12345678" pattern="[0-9]{8}"></input><br/><br/>
                        <br/>
                        <input type="submit" value="Order products" className="button" onClick={validateForm} id="shippingbutton"></input>
                </form>
            </section>
        </div>
    );
  };
  
  export default Cart;