import chai from 'chai'
const expect = chai.expect


import factorial from './factorial.js'

describe('Factorial', () => {
  it('Should return the factorial of a given number', () => {
    expect(factorial(6)).to.be.equal(720)
  })
  it('Should return 1 as a result of 0!', () => {
    expect(factorial(0)).to.be.equal(1)
  })
})