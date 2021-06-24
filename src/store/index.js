// what the initial state of the application will be?

import { createStore, combineReducers } from 'redux'
import bookReducer from '../reducers/book'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
  books: {
    stock: [],
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: bookReducer,
})

// splitting up the reducers will make them independent and not-aware any more of the big picture
// the state argument every reducer is now receiving is just their slice of the cake

const configureStore = () =>
  createStore(bigReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configureStore
