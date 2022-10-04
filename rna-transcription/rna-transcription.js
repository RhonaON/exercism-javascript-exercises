

const transcriptionFromCharacter = (character) => {
  if (character === 'C') {
    return 'G'
  } else if (character === 'G') {
    return  'C'
  } else if (character === 'T') {
    return 'A'
  } else if (character === 'A') {
    return 'U'
  }
  return ''
}

export const toRna = (dna) => {
  let result = ''
  for (let i = 0; i < dna.length; i++) {
    const character = dna[i] 
   
   result += transcriptionFromCharacter(character)
}
  return result
};
