import { expect } from 'chai'
import beersReducer from './beers'

describe("The beers reducer in src/reducers/beers.js", () => {
  it("should return the default state by default if it doesn't match any action", () => {
    const state = beersReducer([5], {type: 'test'})

    expect(state).to.be.deep.equal([5])
  })
  
  it("should set the default state in the parameter called state", () => {
    const state = beersReducer(undefined, {type: 'test'})

    expect(state).not.to.be.equal(undefined)
    expect(Object.prototype.toString.call(state)).to.be.equal('[object Array]')
  })

  it("should handle the action type called RECEIVE_BEERS and add the new beers at the end of the array in the state without mutating the array", () => {
    const beers = [ 2, 3 ]
    const state = beersReducer([1], {type: 'RECEIVE_BEERS', beers: beers})

    expect(state).to.be.deep.equal([1, 2, 3])
  })
})
