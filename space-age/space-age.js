

const orbitalPeriods = {
  mercury: 0.2408467,
  earth: 1,
  venus:  0.61519726,
  mars: 1.8808158 ,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132 
}


// age function takes planets and seconds
export const age = (planet, seconds) => {
  const earthDays = seconds / 31557600
  const orbitalPeriod = orbitalPeriods[planet]
  const planetDays = earthDays / orbitalPeriod
  return parseFloat(planetDays.toFixed(2))
}