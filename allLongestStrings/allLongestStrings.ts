export function allLongestStrings(inputArray: string[]): string[] {
  const longest = Math.max(...inputArray.map(el => el.length))
  return inputArray.filter(item => item.length === longest )
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));