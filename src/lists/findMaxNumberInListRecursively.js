const findMaxNumberInListRecursively = (list) => {
  if (list.length === 0) throw new Error('Empty list')
  if (list.length === 1) return list[0]
  return Math.max(list[0], findMaxNumberInListRecursively(list.slice(1)))
}

export default findMaxNumberInListRecursively
