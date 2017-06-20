export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const ADD_BEER_TO_CART = 'ADD_BEER_TO_CART'

export const receiveBeers = beers => ({
  type: 'HOW_SHOULD_I_BE_CALLED?',
})

export const addBeerToCart = beer => ({
  type: ADD_BEER_TO_CART,
  beer
})
