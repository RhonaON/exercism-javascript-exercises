/*
Steps:
 [x] Get (RNA) string
 [x] Turn it into codons
 [x] Reference codons against proteins
 [x] If invalid codon we throw error
 [x] If we encounter STOP codon - early return
*/

const codonToProtein = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'
}

export const translate = (RNA = '') => {
  const codons = rnaToCodons(RNA)
  const proteins = codonsToProteins(codons)
  return proteins
}


// This function takes an RNA string and splits it into codons
function rnaToCodons(RNA) {
  let codons = []
  while (RNA.length > 0) {
    const codon = RNA.substring(0,3)
    codons.push(codon)

    RNA = RNA.substring(3)
  }
  return codons
}

// This function takes the codons and maps them to a corresponding protein
function codonsToProteins(codons) {
  let proteins = []
  for (const codon of codons) {
    let protein = codonToProtein[codon]
    if (protein === undefined) {
      throw new Error('Invalid codon')
    }
    if (protein === 'STOP') {
      break
    }
    proteins.push(protein)
  }
  return proteins
}

