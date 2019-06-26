import fetch from 'cross-fetch'

export const REQUEST_ITEMS = 'REQUEST_ITEM';
export const RECEIVE_ITEMS ='RECEIVE_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SELECT_SUBCATEGORY ='SELECT_SUBCATEGORY';
export const SELECT_PRODUCT ='SELECT_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREMENT_MONEY_CART = 'INCREMENT_MONEY_CART';

function fetchItems() {
  return dispatch => {
    dispatch(requestItems());
    fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)))
  }
};
export function requestItems(items){
  return {
    type: REQUEST_ITEMS,
    items: items
  }
};

export function receiveItems(json){
  return {
    type: RECEIVE_ITEMS,
    items:json.children.map(child => child.item)
  }
};

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