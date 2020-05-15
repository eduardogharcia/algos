import chai from 'chai'
const expect = chai.expect


// import binarySearchRecursively from './binarySearchRecursively.js'
const { binarySearchRecursively } = require('./binarySearchRecursively');

const list = []
for (let value = 1; value <= 100; value++) {
  list.push(value)
}

describe('Recursive Binary search', () => {
  it('Should find the value on the list with the correct number of iterations', () => {
    expect(binarySearchRecursively(list, 1)).to.be.deep.equal({ value: 1, iterations: 7 })
    expect(binarySearchRecursively(list, 7)).to.be.deep.equal({ value: 7, iterations: 4 })
    expect(binarySearchRecursively(list, 13)).to.be.deep.equal({ value: 13, iterations: 3 })
    expect(binarySearchRecursively(list, 26)).to.be.deep.equal({ value: 26, iterations: 2 })
    expect(binarySearchRecursively(list, 51)).to.be.deep.equal({ value: 51, iterations: 1 })
    expect(binarySearchRecursively(list, 100)).to.be.deep.equal({ value: 100, iterations: 7 })
  })

  it('Should return null if not found', () => {
    expect(binarySearchRecursively(list, 101)).to.be.null
  })
})