import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'
import '../styles/shopping.css'
import { Paper } from '@material-ui/core';

class CategoryMenu extends React.Component {
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
        }
        handleClick( categories ) {
          console.log(categories)
          this.setState( prevState => ( 
            { [ categories ]: !prevState[ categories ],
            selectedCategory: categories } 
          ) )
          console.log(this.state)
        };
        
        handler( subcategories ) {
          const { state } = this

          return subcategories.map( ( subOption ) => {
            if ( !subOption.subcategories ) {
              return (
                <div key={ subOption.name }>
                  <ListItem
                    button 
                    key={ subOption.name }>
                    <Link 
                      to={subOption.name}> 
                      <ListItemText 
                        inset 
                        primary= { subOption.name }
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
                    inset 
                    primary={ subOption.category } />
                </ListItem>
                <Collapse
                  in={ state[ subOption.category ] } 
                  timeout="auto" 
                  unmountOnExit
                >
                { this.handler( subOption.subcategories ) }
                </Collapse>
              </div>
            )
          }) 
        }

    render() {
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

  
export default (CategoryMenu);