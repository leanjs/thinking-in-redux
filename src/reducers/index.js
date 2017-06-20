import { combineReducers } from 'redux'
// import { combineReducers } from '../redux/combineReducers'

import beers from './beers'
import cart from './cart'
import menu from './menu'

const reducers = combineReducers({
  beers,
  cart,
  menu
})

export default reducers
