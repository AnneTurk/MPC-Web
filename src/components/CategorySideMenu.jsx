import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'
import '../styles/shopping.css'

var subcategoryUrl = "/shopping/"; 

class CategorySideMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: [],
        isOpen: {}
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
        }
        handleClick( categories ) {
          let selectedCategory = categories;
          console.log(selectedCategory);
          this.setState( { isOpen: { [categories]: !this.state.isOpen[ categories ] }}          )

        };
        
        handler( subcategories) {
          const { state } = this;         
          return subcategories.map( ( subOption ) => {
            console.log(subOption);
            if ( !subOption.subcategories ) {
              return (
                <div key={ subOption.name }>
                  <ListItem
                    button 
                    key={ subOption.name }>
                    <Link 
                      to={`${subcategoryUrl}${Object.keys(state.isOpen)[0]}/${subOption.name}`}
                      className="subcategorymenulink"> 
                      <ListItemText 
                        inset 
                        primary= { subOption.name }
                        className="subcategorymenulink"
                      />
                    </Link>
                  </ListItem>
                </div>
              )
            }
             return (
              <div key={ subOption.category }>
                <ListItem 
                  button 
                  onClick={ () => this.handleClick( subOption.category ) }>
                  <ListItemText
                  className="categorymenulink"
                    inset 
                    primary={ subOption.category } />
                </ListItem>
                <Collapse
                  in={ state.isOpen[ subOption.category ] } 
                  timeout="auto" 
                  unmountOnExit
                >
                { this.handler( subOption.subcategories) }
                </Collapse>
              </div>
            )
          }) 
        }

    render() {
      console.log(this.state)
      const { error, isLoaded, categories} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return  <div className="list col-3" id="categorymenu">
        <Drawer 
          variant="persistent" 
          anchor="left"
          open
          >
          <div>
            <List>
              <ListItem 
                key="menuHeading"
                divider
                disableGutters
              >
                <ListItemText
                className="menuHeader"
                  inset
                  primary="Categories"
                />
              </ListItem>
            { this.handler( categories ) }
            </List>
          </div>
        </Drawer>
      </div>
        
      }
    }
  }

  
export default (CategorySideMenu);