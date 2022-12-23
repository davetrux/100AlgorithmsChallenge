export function arrayConversion(inputArray: number[]): number {
  let result:number [] = inputArray
  let isOdd = true
  while (result.length !== 1) {
    const destination: number[] = []
    for(let i = 0; i < result.length; i+=2) {
      let item: number
      if (isOdd) {
        item = result[i] + result[i+1]
      } else {
        item = result[i] * result[i + 1]
      }
      destination.push(item)
    }
    isOdd = !isOdd
    result = destination
  }

  return result[0]
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
