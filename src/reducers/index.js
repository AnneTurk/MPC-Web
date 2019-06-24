import { combineReducers } from 'redux'
import {
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from './actions'

function selectedCategory(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function items(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByCategory(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
    case RECEIVE_ITEMS:
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        [action.category]: items(state[action.category], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByCategory: postsByCategory,
  selectedCategory: selectedCategory
})

export default rootReducer