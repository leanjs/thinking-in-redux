import { RECEIVE_BEERS, BUY_BEER, DELETE_BEER_FROM_CART } from '../actions'

/*
reducers should do 3 things:
    1. Set the default state
    2. Handle an action by checking the type and return a new state WITHOUT mutating the state
    3. Return the default state if no action is handled
*/
const byId = (beer_a, beer_b) => {
  if (beer_a.id < beer_b.id) return -1
  if (beer_a.id > beer_b.id) return 1
  return 0
}

const beers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BEERS:
      return [...state, ...action.beers].sort(byId)

    case BUY_BEER:
      return state.filter( beer => ( beer.id !== action.beer.id ))

    case DELETE_BEER_FROM_CART:
      return [...state, action.beer].sort(byId)

    default:
      return state
  }
}

export default beers
