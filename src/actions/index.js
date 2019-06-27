import fetch from 'cross-fetch'

export const FETCH_ITEMS_BEGIN = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_SUCCES ='FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE ='FETCH_ITEMS_FAILURE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SELECT_SUBCATEGORY ='SELECT_SUBCATEGORY';
export const SELECT_PRODUCT ='SELECT_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREMENT_MONEY_CART = 'INCREMENT_MONEY_CART';

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

export function selectItem(item, id) {
    return {
    type: SELECT_ITEM,
    id: id,
    item : item
  }
};
export function selectSubcategory(subcategory, id) {
  return {
    type: SELECT_SUBCATEGORY,
    id:id,
    subcategory: subcategory
  }
};

export function selectProduct(product, id) {
  return{
    type: SELECT_PRODUCT,
    id:id,
    product:product
  }
};
export function addProduct (cart, item, subcategory, name, description, price, imagelink, rating, stock, category, productsubcategory) {
  return {
    type: ADD_PRODUCT,
    cart: cart,
    //item: item,
   // subcategory: subcategory,
    product: {
      name: name,
      description: description,
      price: price,
      imagelink: imagelink,
      rating: rating,
      stock: stock,
      category: category,
      productsubcategory: productsubcategory
    }
  }
};

export function deleteProduct (product) {
  return {
    type: DELETE_PRODUCT,
    product: product
  }
};

export function incrementMoneyCart (amount) {
  return {
    type: INCREMENT_MONEY_CART,
    amount: amount
  }
};