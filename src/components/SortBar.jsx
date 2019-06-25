import React from "react";
import "../index.css";
import "../styles/shopping.css";

class SortBar extends React.Component {
    render(){
      const CategoryName = "Categorynaam";
        return ( 
            <div className="flex-container col-9">
                <br></br>
                <br></br>
              <h1>{CategoryName}</h1>
            </div>
    );
  }
}; 
  

export default SortBar