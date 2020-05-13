const greatestCommonDivisor = (a,b) => {
  if (a==0) return b
  if (b==0) return a

  return greatestCommonDivisor(b, a % b)
}

export default greatestCommonDivisor