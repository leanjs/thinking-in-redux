import { TOGGLE_SIDE_MENU, BUY_BEER } from '../actions'

const menu = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isOpen: !state.isOpen }
    case BUY_BEER:
      return { ...state, isOpen: true }
    default:
      return state
  }
}

export default menu
