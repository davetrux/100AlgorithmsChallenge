export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0
  for(let i = 0; i < inputArray.length; i++) {
    let innerMax = 0
    for (let j = 0; j < k; j++) {
      innerMax += inputArray[i+j]
    }
    if(innerMax > max) {
      max = innerMax
    }
  }

  return max
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));