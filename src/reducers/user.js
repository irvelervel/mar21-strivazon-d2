import { initialState } from '../store'

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        firstName: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
