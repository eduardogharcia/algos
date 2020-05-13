const binarySearchRecursively = (list, searchTerm, iterations = 1) => {
  const middleIndex = getListMiddleIndex(list)

  if (list.length === 1 && list[middleIndex] !== searchTerm) return null

  if (list[middleIndex] === searchTerm) return { value: list[middleIndex], iterations }

  if (list[middleIndex] > searchTerm) {
    return binarySearchRecursively(list.slice(0, middleIndex), searchTerm, iterations + 1)
  }

  return binarySearchRecursively(list.slice(middleIndex), searchTerm, iterations + 1)
}

const getListMiddleIndex = (list) => {
  return Math.floor(list.length/2)
}

export default binarySearchRecursively