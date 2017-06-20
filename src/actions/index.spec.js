import { expect } from 'chai'
import * as actions from './index'

describe("The action creator called receiveBeers in src/actions/index.js", () => {
  it("should return a JSON object with a key called 'type' and value 'RECEIVE_BEERS'", () => {
    const action = actions.receiveBeers()

    expect(action.type).not.to.be.equal(undefined)
    expect(action.type).to.be.equal('RECEIVE_BEERS')
  })

  it("should return a JSON object with a key called 'beers' with the value of the parameter called beers", () => {
    const beers = [1, 2]
    const action = actions.receiveBeers(beers)

    expect(action.beers).not.to.be.equal(undefined)
    expect(action.beers).to.be.deep.equal(beers)
  })
})
