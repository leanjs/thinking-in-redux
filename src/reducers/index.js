// import { combineReducers } from 'redux'
import { combineReducers } from '../redux/combineReducers'

import beers from './beers'
import cart from './cart'

const reducers = combineReducers({
  beers,
  cart
})

export default reducers
