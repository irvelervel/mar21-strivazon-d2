// here I write my action creators
// functions that return actions

// redux-thunk is a middleware allowing you to dispatch not only JS OBJECTS anymore,
// but also gives redux the ability to dispatch FUNCTIONS (can be async)

// our goal is to write an action creator that does not only return the JS OBJECT (the action)
// but also handling the async fetch, getting the data out of the API and then dispatch
// the action with the array of books as the payload

export const getBooksAction = () => {
  return async () => {
    // fetch the books here!
  }
}

export const addItemToCartAction = (book) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: book,
  }
}

// export const addItemToCartAction = (book) => ({
//   type: 'ADD_ITEM_TO_CART',
//   payload: book,
// })

export const removeItemFromCartAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})

// ({
// })
// is for returning an object out of your arrow function

export const setUsernameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})
