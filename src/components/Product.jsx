import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import "../styles/product.css"
import "../index.css"

var productname = "Apricot";
var rating = "4";
var price = 0.29;
var description ="Fresh apricots offer a plentiful supply of vitamin C.  Priced per each.";
var inStock ="250";
var image ="https://webmppcapstone.blob.core.windows.net/fruitsimages/apricot.jpg"

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function selectProduct () {
 var product= getQueryVariable("name");
    if (product="apricot"){
        var productname = "Apricot";
        var rating = "4";
        var price = 0.29;
        var description ="Fresh apricots offer a plentiful supply of vitamin C.  Priced per each.";
        var inStock ="250";
        var image ="https://webmppcapstone.blob.core.windows.net/fruitsimages/apricot.jpg"
    } if (product="avocado"){
            var productname = "Avocado";
            var rating = "5";
            var price = 0.19;
            var description ="Each serving of creamy, delicious avocado offers nearly 20 vitamins, minerals and phytonutrients  Priced per each.";
            var inStock ="250";
            var image ="https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg";
    }
    if (product="banana"){
        return{
            productname: "Banana",
            rating: "5",
            price: 1.98,
            description : "Product of Indonesia.  Priced per each.",
            inStock :"100",
            image :"https://webmppcapstone.blob.core.windows.net/fruitsimages/banana.jpg",
        }
 }
    }
class Product extends React.Component {
    constructor(props) {
      super(props)
      };
    componentDidMount(){
        selectProduct()
    };
    render(){
    return (
        <div className="flex-container-row">
            <NavLink to="/" class="firstelement" id="backarrow">
                <FontAwesomeIcon icon="arrow-left"/>
            </NavLink> {/* -rubric43 */}  &nbsp;
            <div className="flex-container-column col-4">
                <img id="image" src={image}/>
            </div>
            <div className="flex-container-row col-8">
            <table>
  <tr>
    <th><h1>{productname}</h1></th>
    <th></th>
  </tr>
  <tr>
    <td>Rating</td>
    <td>{rating} stars</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>$&nbsp;{price}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{description}</td>
  </tr>
  <tr>
    <td>In stock</td>
    <td>{inStock}</td>
  </tr>
  <tr>
    <td>Qty</td>
    <td><input type='number' className="numberinput"></input></td>
  </tr>
  <tr><br></br></tr>
  <tr>
    <th></th>
    <th><button type="submit" id="addtocart">Add to Cart</button></th>
    </tr>
</table>

    </div>
            </div>
    );
  };
}

export default (Product)