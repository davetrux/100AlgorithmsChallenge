export function alphabeticShift(inputString: string): string {

  const chars = []
  for(let i = 0; i < inputString.length; i++) {
    let code = inputString.charCodeAt(i)
    console.log(code)
    if (code === 122 || code === 90) {
      code -=25
    } else {
      code++
    }
    chars.push(code)
  }
  return String.fromCharCode(...chars)
}

console.log(alphabeticShift('crazy'));