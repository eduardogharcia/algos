import chai from 'chai'
const expect = chai.expect

import sumListItemsRecursively from './sumListItemsRecursively.js'
import findMaxNumberInListRecursively from './findMaxNumberInListRecursively.js'
import countListItemsRecursively from './countListItemsRecursively.js'

describe('Recursive List sum', () => {
  it('Should return zero if the list is empty', () => {
    expect(sumListItemsRecursively([])).to.be.equal(0)
  })
  it('Should return the sum of all items of a list', () => {
    expect(sumListItemsRecursively([1,2,3,4])).to.be.equal(10)
    expect(sumListItemsRecursively([-5, 5])).to.be.equal(0)
    expect(sumListItemsRecursively([14,95,48,52])).to.be.equal(209)
  })
})

describe('Max number finder in list', () => {
  it('Should return the max number in a given list', () => {
    expect(findMaxNumberInListRecursively([1,2,3,4,5])).to.be.equal(5)
    expect(findMaxNumberInListRecursively([15,819,15,19,61])).to.be.equal(819)
    expect(findMaxNumberInListRecursively([-418,-15,-83,-24,-4785])).to.be.equal(-15)
  })
  it('Should throw if the list is empty', () => {
    expect(() => findMaxNumberInListRecursively([])).to.throw()
  })
})

describe('Count items in list', () => {
  it ('Should return quantity items in given list', () => {
    expect(countListItemsRecursively([77,2,3,8,6,2,8,0,345,12,9,5])).to.be.equal(12)
  })
  it ('Should handle empty list', () => {
    expect(countListItemsRecursively([])).to.be.equal(0)
  })
})