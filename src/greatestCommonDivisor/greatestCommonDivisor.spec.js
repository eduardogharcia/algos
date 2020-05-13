import chai from 'chai'
const expect = chai.expect

import greatestCommonDivisor from './greatestCommonDivisor.js'

describe('Greatest commom divisor', () => {
  it('Should return the greatest common divisor', () => {
    expect(greatestCommonDivisor(100, 50)).to.be.equal(50)
    expect(greatestCommonDivisor(270, 192)).to.be.equal(6)
    expect(greatestCommonDivisor(192, 270)).to.be.equal(6)
    expect(greatestCommonDivisor(2400, 350)).to.be.equal(50)
    expect(greatestCommonDivisor(14, 4)).to.be.equal(2)
  })
  it('Should return A if B is zero and vice-versa', () => {
    expect(greatestCommonDivisor(0, 0)).to.be.equal(0)
    expect(greatestCommonDivisor(83, 0)).to.be.equal(83)
    expect(greatestCommonDivisor(0, 145)).to.be.equal(145)
  })
})