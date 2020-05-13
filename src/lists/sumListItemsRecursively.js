const sumListItemsRecursively = (list) => {
  if (list.length === 0) return 0
  if (list.length === 1) return list[0]
  return list[0] + sumListItemsRecursively(list.slice(1))
}

export default sumListItemsRecursively