export function areSimilar(a: number[], b: number[]): boolean {
  a.sort()
  b.sort()
  const result = (a.toString() === b.toString())
  return result
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
