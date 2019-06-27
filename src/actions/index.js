import fetch from 'cross-fetch'

export const FETCH_ITEMS_BEGIN = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_SUCCES ='FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE ='FETCH_ITEMS_FAILURE';

export function fetchItems() {
  return dispatch => {
    dispatch(fetchItemsBegin());
    return fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json",
    {method: 'GET'})
    .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchItemsSuccess(json));
        console.log(json)
      return json.items})
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response
}

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
  });

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCES,
  payload: { items }
});

export const fetchItemsFailure = error =>
({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
})
