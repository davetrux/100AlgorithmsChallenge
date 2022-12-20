export function alternatingSums(a: number[]): number[] {

  let teamA: number = 0
  let teamB: number = 0
  for(let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamB += a[i]
    } else {
      teamA += a[i]
    }
  }

  return [teamB, teamA]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))