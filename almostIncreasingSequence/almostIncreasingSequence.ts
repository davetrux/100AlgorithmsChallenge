export function almostIncreasingSequence(sequence: number[]): boolean {

  // let badIndex = -1
  // for (let i = 0; i < sequence.length - 1; i++) {
  //   if (sequence[i] >= sequence[i + 1]) {
  //     badIndex = i
  //     break
  //   }
  // }
  // if (badIndex === -1) {
  //   return true //The array was in order
  // }
  //
  // sequence.splice(badIndex, 1)
  // let result = true
  // for (let i = 0; i < sequence.length - 1; i++) {
  //   if (sequence[i] > sequence[i + 1]) {
  //     result = false
  //     break
  //   }
  // }
  // return result

  // This works because for i=0, sequence[i-1] returns undefined and not an error, and undefined is not less than a defined element
  let count = 0
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      count++
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
        return false
      }
    }
  }
  return count <= 1
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 