import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = ({ categories, toggleCategory }) => (
  <ul>
    {categories.map(category => (
      <Category key={category.id} {...category} onClick={() => toggleCategory(category.id)} />
    ))}
  </ul>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleCategories: PropTypes.func.isRequired
}

export default CategoryList