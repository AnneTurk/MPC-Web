import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectCategory,
  fetchItemsIfNeeded,
  invalidateCategory
} from '../actions'
import Picker from '../components/Picker'
import Items from '../components/Items'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedCategory: selectedCategory } = this.props
    dispatch(fetchItemsIfNeeded(selectedCategory))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCategory !== prevProps.selectedCategory) {
      const { dispatch, selectedCategory } = this.props
      dispatch(fetchItemsIfNeeded(selectedCategory))
    }
  }

  handleChange(nextCategory) {
    this.props.dispatch(selectCategory(nextCategory))
    this.props.dispatch(fetchItemsIfNeeded(nextCategory))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedCategory } = this.props
    dispatch(invalidateCategory(selectedCategory))
    dispatch(fetchItemsIfNeeded(selectedCategory))
  }

  render() {
    const { selectedCategory, items, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker
          value={selectedCategory}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty.</h2>}
        {items.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Items items={items} />
          </div>
        )}
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedCategory, itemsByCategory } = state
  const { isFetching, lastUpdated, items: items } = itemsByCategory[
    selectedCategory
  ] || {
    isFetching: true,
    items: []
  }

  return {
    selectedCategory,
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)