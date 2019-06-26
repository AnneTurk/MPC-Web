import { combineReducers } from 'redux'
import {
  REQUEST_ITEMS, 
  RECEIVE_ITEMS,
  SELECT_ITEM,
  SELECT_SUBCATEGORY,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREMENT_MONEY_CART
} from '../actions/index'

var initialState = {
  items: [],
  subcategories : [],
  products: [],
  cart:[]
}

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "REQUEST_ITEMS":
      return state;
    case "RECEIVE_ITEMS":
      return {
        ...state,
        items: action.items
      };
    case "SELECT_ITEM":
      if (state === action.id) return null;
        else return action.id;
    default: 
      return state;
  }
}
export const subcategoryReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_SUBCATEGORY":
      if (state === action.id) return [];
      else return action.id
    default: 
    return state;
  }
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var stateCopy = [];
      stateCopy[action.cart].push(action.product);
      return stateCopy;
    case "DELETE_PRODUCT":
      var stateCopy = [];
      stateCopy[action.cart].splice(action.product, 1);
      return stateCopy
    default: 
    return state;
  }
}

export const totalAmount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_MONEY_CART':
      return state + action.amount;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  itemReducer,
  subcategoryReducer,
  cartReducer,
  totalAmount
})

export default rootReducer