export function addBorder(picture: string[]): string[] {
  const strLen = picture[0].length + 2
  const stars = '*'.repeat(strLen)
  const result = new Array<string>()
  result.push(stars)
  result.push(...picture.map(pic => '*' + pic + '*'))
  result.push(stars)
  return result
}

console.log(addBorder(["abc", "ded"]));