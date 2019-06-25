import fetch from 'cross-fetch'

export const INVALIDATE_CATEGORY = 'INVALIDATE-CATEGORY'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'

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
  console.log()
  return {
    type: RECEIVE_ITEMS,
    category,
    items: json.data.children.map(child => child.data),
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