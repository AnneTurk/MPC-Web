import fetch from 'cross-fetch'

export const REQUEST_ITEMS
export const RECEIVE_ITEMS
export const SELECT_CATEGORY
export const INVALIDATE_CATEGORY

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

export function invalidateCategory(category) {
  return{
    type: INVALIDATE_CATEGORY,
    category
  }
}

 function requestItems(category) {
  return {
    type: REQUEST_ITEMS,
    category
  }
}

function receiveItems(category, json) {
  return {
    type: RECEIVE_ITEMS,
    category,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchItems(category) {
  return dispatch => {
    dispatch(requestItems(category))
    return fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveItems(category, json)))
  }
}

function shouldFetchItems(state, category) {
  const items = state.itemsByCategory[category]
  if (!items) {
    return true
  } else if (items.isFetching) {
    return false
  } else {
    return items.didInvalidate
  }
}

export function fetchItemsIfNeeded(category) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState(), category)) {
      return dispatch(fetchItems(category))
    }
  }
}