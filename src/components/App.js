import React from "react"
import SideMenu from 'react-burger-menu'
import { connect } from 'react-redux'

import BeerList from "./beers/List"
import Basket from "./cart/Basket"
import Checkout from "./cart/Checkout"
import Header from "./Header"
import theme from "./theme"

import * as actions from '../actions'

class App extends React.Component {
  constructor() {
    super()
  }

  toggleSideMenu = () => {
    this.props.dispatch(actions.toggleSideMenu())
  }

  render() {
    return (
      <div id="page-wrap">
        <SideMenu.slide
          noOverlay
          customCrossIcon={false}
          customBurgerIcon={ false }
          isOpen={this.props.isOpen}
          pageWrapId={'page-wrap'}
          styles={theme.sideMenu}
        >
          <Checkout />
          <Basket />
        </SideMenu.slide>
        <div className="container">
          <a className="fa-stack fa-lg" style={theme.checkoutButton} onClick={this.toggleSideMenu} >
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </a>
          <Header />
          <BeerList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
