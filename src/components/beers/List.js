import React from 'react'
// import { connect } from 'react-redux'
import { connect } from '../../react-redux/connect'
import * as api from '../../api'
import * as actions from '../../actions'

class List extends React.Component {
  componentDidMount() {
    api.fetchBeers().then( beers => {
      this.props.dispatch(actions.receiveBeers(beers))
    })
  }

  render() {
    return (
      <div>
        {this.props.beers.map( beer => (
          <div className="row" key={beer.id}>
            <div className="col-md-4">
              <img className="img-responsive" src={beer.photo_link}></img>
            </div>
            <div className="col-md-8">
              <h2>{beer.title}</h2>
              <p>{beer.colour} - {beer.country}</p>
              <p>{beer.size} <span className="label label-warning"> &pound; {beer.price}</span></p>
              <button
                className="btn btn-primary"
                onClick={() => this.props.dispatch(actions.addBeerToCart(beer))}
              >
                Buy me!
              </button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  beers: state.beers
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

/*

SOME EXPLANATION AND TIPS ABOUT USING CONNECT

// this is the simplest way to connect our component to the store.dispatch method
const mapDispatchToProps = dispatch => ({
  dispatch
})


// we can also connect directly an action with dispatch by doing this
const mapDispatchToProps = dispatch => ({
  dispatchReceiveBeers: beers => {
    dispatch(actions.receiveBeers(beers))
  }
})
// then instead of doing this
this.props.dispatch(actions.receiveBeers(beers))
// we can simply do this
this.props.dispatchReceiveBeers(beers)


// the following technique is not implemented in our simplified react-redux,
// import { connect } from 'react-redux' to use this the following (recommended)
const mapDispatchToProps = {
  dispatchReceiveBeers: actions.receiveBeers
}

*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
