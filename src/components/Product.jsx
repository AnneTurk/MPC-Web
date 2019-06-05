import React from "react";
import "../index.css";

class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
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
              items: result
            }); 
            console.log(result)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log(error)
          }
        )
        }
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div>          
        <ul>
          {items.map(item => (
            <li key={item.category}>
              {item.category}
            </li>
          ))}
        </ul>
        </div>

        );
      }
    }
  }

const Product = ({match}) => {
    return (
        <div>
            <h1>Product: {match.params.id}</h1>
            <Products />
        </div>
    );
  };
  
export default Product;