import React from "react";
import "../index.css";
import "../styles/shopping.css";

class SortBar extends React.Component {
    render(){
      const CategoryName = "";
        return ( 
            <div className="sortbar"> 
              <h1 id="categoryname-sortbar">{CategoryName}</h1>
              <div className="col-4"></div>
              <div id="sortbar-part">
              <label class="sortby" id="sortby-label">Sort by:&nbsp;</label>
              <select name="Sort by" size="1" class="sortby" id="select-sortby"> 
                  <option value="none">None</option>
                  <option value="price">Price</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="rating">Rating</option>
              </select>
              </div>
            </div>
    );
  }
}; 
  

export default SortBar