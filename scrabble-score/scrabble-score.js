/* STEPS:
[x] Create a scores object
[x] Make score function take a word string and iterate over it
[x] For every letter of word string - look up the corresponding score
[x] Sum the scores
*/

const letterScores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

export const score = (word) => {
  let sum = 0
  for (let i = 0; i < word.length; i ++) {
    let letter = word[i].toLowerCase()
    let letterScore = letterScores[letter]
    sum += letterScore
  }
  return sum
}
