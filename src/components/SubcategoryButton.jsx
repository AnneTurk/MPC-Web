import React from 'react'
import '../styles/shopping.css'
import '../index.css'


class SubcategoryButton extends React.Component {
    render() {
        const subcategory = this.props.subcategories;
        console.log(subcategory);
        return(
        <div>
            <button type="button" name="category" className="button">
                
            </button>
        </div>
        );
    }
}

export default SubcategoryButton;