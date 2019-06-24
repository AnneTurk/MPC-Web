import React from "react";
import "../index.css"

class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        subcategories: [],
        products:[],
      };
    }
  
    componentDidMount() {
      fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.map(item => ({
                category: item.category,
              })),
            });
            console.log(result)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items, subcategories } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          console.log(items)
        return (
          <ul>
            {items.map(items => (
              <li key={items.subcategories}>
                {items.category} {items.subcategories}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default Data;