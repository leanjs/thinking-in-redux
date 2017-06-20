export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const BUY_BEER = 'BUY_BEER'
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'
export const DELETE_BEER_FROM_CART = 'DELETE_BEER_FROM_CART'

export const receiveBeers = beers => ({
  type: RECEIVE_BEERS,
  beers
})

export const addBeerToCart = beer => ({
  type: BUY_BEER,
  beer
})

export const toggleSideMenu = () => ({
  type: TOGGLE_SIDE_MENU
})

export const deleteBeerFromCart = beer => ({
  type: DELETE_BEER_FROM_CART,
  beer
})
