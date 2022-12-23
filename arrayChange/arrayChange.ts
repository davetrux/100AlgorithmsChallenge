export function arrayChange(inputArray: number[]): number {

  let moves = 0
  for(let i=0; i < inputArray.length - 1; i++) {
    while(inputArray[i + 1] - inputArray[i] !== 1) {
      inputArray[i + 1] += 1
      moves += 1
    }
  }
  return moves
}

// console.log(arrayChange([1, 1, 1]));