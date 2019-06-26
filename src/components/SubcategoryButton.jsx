import React from 'react'
import '../styles/shopping.css'
import '../index.css'

class SubcategoryButton extends React.Component {
    render() {
        return(
        <div>
            <button type="button" name="category" className="button">
               {this.props.category} 
            </button>
        </div>
        );
    }
}

export default SubcategoryButton;