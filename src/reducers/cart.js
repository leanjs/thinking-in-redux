import { ADD_BEER_TO_CART } from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_BEER_TO_CART:
      return [...state, action.beer]
    default:
      return state
  }
}

export default cart
