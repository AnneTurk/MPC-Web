import React from "react";
import "../styles/shopping.css";
import "../index.css";
import {Link} from 'react-router-dom';
import {fetchData} from '../actions/requestProducts'

class CategoryOverview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: [],
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
    };
        handler( categories ) {
          const { state } = this
          return categories.map( ( subOption ) => {
              return (
                <div key={ subOption.category } >
                  <button >
                  <Link to="/product?name=productname" key={subOption.category}>{subOption.category}</Link>
                  </button>
                </div>
              )
            })
          };      
    render(){
        const {categories} = this.state;
        return ( 
            <div className="col-9 overview ">
                {this.handler(categories)}
            </div>
    );
  }
};
  
export default (CategoryOverview);