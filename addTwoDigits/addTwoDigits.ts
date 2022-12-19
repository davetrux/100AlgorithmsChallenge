export function addTwoDigits(n: any): number {
  const stringParts = n.toString().split("")
  const digit1 =  parseInt(stringParts[0])
  const digit2 = parseInt(stringParts[1])
  return digit1 + digit2
}

// console.log(addTwoDigits(29));