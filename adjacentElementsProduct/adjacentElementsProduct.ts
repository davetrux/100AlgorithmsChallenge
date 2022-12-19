export function adjacentElementsProduct(inputArray: number[]): number {
  let largestResult = 0
  for(let i = 0; i < inputArray.length-1; i++) {
    const temp = inputArray[i] * inputArray[i+1]
    if (temp > largestResult)
      largestResult = temp
  }
  return largestResult
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));