const selectionSort = (list) => {
  
  for (let outerIndex = 0; outerIndex < list.length - 1; outerIndex++) {
    let smaller = list[outerIndex]
    let indexSmaller = outerIndex
  
    for (let innerIndex = outerIndex + 1; innerIndex < list.length; innerIndex++) {
      if (list[innerIndex] < smaller) {
        smaller = list[innerIndex]
        indexSmaller = innerIndex
      }
    }

    list[indexSmaller] = list[outerIndex]
    list[outerIndex] = smaller
  }

  return list
}

export default selectionSort