import { combineReducers } from 'redux'
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCES,
  FETCH_ITEMS_FAILURE,
  REQUEST_STORE
} from '../actions/index'

var initialState = {
  items: [],
  cart:[],
  loading: false,
  error: null
}

export function itemReducer (state = initialState, action){
  switch(action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
      ...state,
      loading: true,
      error: null

      };
    case FETCH_ITEMS_SUCCES:
      return {
      ...state,
      loading: false,
      items: action.payload.items
      };
    case FETCH_ITEMS_FAILURE:
      return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: []
      };
      case REQUEST_STORE:
          return{
            ...state,
            loading:false,
            error: null,
            items: action.payload.items
          }
    default:
      return state;
}}





const rootReducer = combineReducers({
  items: itemReducer, 
})

export default rootReducer