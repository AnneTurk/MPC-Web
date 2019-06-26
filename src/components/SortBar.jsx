import React from "react";
import "../index.css";
import "../styles/shopping.css";

class SortBar extends React.Component {
    render(){
      const CategoryName = "Categorynaam";
        return ( 
            <div className="flex-container-row">
              <h1>{CategoryName}</h1>
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                 <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">CSS</a></li>
                      <li><a href="#">JavaScript</a></li>
                    </ul>
              </div>
            </div>
    );
  }
}; 
  

export default SortBar