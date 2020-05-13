const countListItemsRecursively = (list) => {
  if (list.length === 0) return 0
  if (list.length === 1) return 1
  return 1 + countListItemsRecursively(list.slice(1))
}

export default countListItemsRecursively