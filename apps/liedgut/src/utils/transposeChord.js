const chords = [
  'c',
  'cis',
  'd',
  'dis',
  'e',
  'f',
  'fis',
  'g',
  'gis',
  'a',
  'ais',
  'h',
]

const bMap = {
  des: 'cis',
  es: 'dis',
  ges: 'fis',
  as: 'gis',
  b: 'ais',
}

const checkDur = (chord) => chord.match(/[A-Z]/) !== null
const checkB = (chord) => chord.match(/(es|as|b)/) !== null

export default function transpose(chord, steps = 0, forceB = false) {
  if (steps === 0) {
    return chord
  }

  const isDur = checkDur(chord)
  const isB = checkB(chord)

  return chord.replace(/([a-zA-Z]+)/g, (match) => {
    let normalized = match.toLowerCase()

    if (chords.indexOf(normalized) === -1) {
      normalized = bMap[normalized]
    }

    const index = chords.indexOf(normalized)

    // return if no match is found, e.g. sus endings
    if (index === -1) {
      return match
    }

    let newIndex
    if (steps > 0 && index + steps > chords.length - 1) {
      newIndex = steps - (chords.length - index)
    } else if (steps < 0 && index + steps < 0) {
      newIndex = chords.length + (index + steps)
    } else {
      newIndex = index + steps
    }

    let newChord = chords[newIndex]

    if (isB || forceB) {
      // remap to b chords if possible
      Object.keys(bMap).forEach((chord) => {
        if (bMap[chord] === newChord) {
          newChord = chord
        }
      })
    }

    if (isDur) {
      // remap to dur chords if possible
      newChord = newChord.substr(0, 1).toUpperCase() + newChord.substr(1)
    }

    return newChord
  })
}
