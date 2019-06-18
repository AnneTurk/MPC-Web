import React from "react";
import "../styles/shopping.css";
import "../index.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
    handler( subcategories ) {
        const { state } = this

        return subcategories.map( ( subOption ) => {
            return (
              <div key={ subOption.name }>
                <Grid item xs={12}>
                <ButtonGroup 
                  key={ subOption.name }>
                  <Button>
                        {subOption.category} 
                  </Button>
                </ButtonGroup>
                </Grid>
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