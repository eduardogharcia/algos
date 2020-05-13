import chai from 'chai'
const expect = chai.expect


import selectionSort from './selectionSort.js'

const list = [9,6,5,8,7,50,4,2,3,1]

describe('Selection Sort', () => {
  it('Should return the sorted list', () => {
    expect(selectionSort(list)).to.have.ordered.members([1,2,3,4,5,6,7,8,9,50])
  })
  it('Should handle empty arrays without errors', () => {
    expect(selectionSort([])).to.be.eql([])
  })
})