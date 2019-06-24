import { connect } from 'react-redux';
import { toggleCategory } from '../actions';
import  CategoryList from '../components/CategoryList';
import { VisibilityFilters } from '../actions';

const getVisibleCategories = (categories, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return categories
    case VisibilityFilters.SHOW_COMPLETED:
      return categories.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return categories.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  categorys: getVisibleCategories(state.categories, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)