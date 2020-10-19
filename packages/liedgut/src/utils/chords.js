const cis = {
  barre: {
    finger: 1,
    fret: 4,
    from: 'e',
    to: 'A',
  },
  b: { fret: 5, finger: 2 },
  G: { fret: 6, finger: 4 },
  D: { fret: 6, finger: 3 },
}
const cis7 = {}
const Cis = {
  barre: {
    finger: 1,
    fret: 4,
    from: 'e',
    to: 'A',
  },
  b: { fret: 4, finger: 4 },
  G: { fret: 6, finger: 3 },
  D: { fret: 6, finger: 2 },
}
const Cis7 = {}

const dis = {}
const dis7 = {}
const Dis = {}
const Dis7 = {}

const fis = {
  barre: {
    fret: 2,
    finger: 1,
    from: 'e',
    to: 'E',
  },
  D: { fret: 4, finger: 4 },
  A: { fret: 4, finger: 3 },
}
const fis7 = {}
const Fis = {
  barre: {
    fret: 2,
    finger: 1,
    from: 'e',
    to: 'E',
  },
  G: { fret: 3, finger: 2 },
  D: { fret: 4, finger: 4 },
  A: { fret: 4, finger: 3 },
}
const Fis7 = {}

const gis = {}
const gis7 = {}
const Gis = {}
const Gis7 = {}

const ais = {
  barre: {
    fret: 1,
    finger: 1,
    from: 'e',
    to: 'A',
  },
  b: { fret: 2, finger: 2 },
  G: { fret: 3, finger: 4 },
  D: { fret: 3, finger: 3 },
}
const ais7 = {}
const Ais = {
  barre: {
    fret: 1,
    finger: 1,
    from: 'e',
    to: 'A',
  },
  b: { fret: 3, finger: 4 },
  G: { fret: 3, finger: 3 },
  D: { fret: 3, finger: 2 },
}
const Ais7 = {}

export default {
  // C
  C: {
    b: { fret: 1, finger: 1 },
    D: { fret: 2, finger: 2 },
    A: { fret: 3, finger: 3 },
  },

  C7: {
    b: { fret: 1, finger: 1 },
    G: { fret: 3, finger: 4 },
    D: { fret: 2, finger: 2 },
    A: { fret: 3, finger: 3 },
  },
  Cis,
  Cis7,
  c: {},
  c7: {},
  cis,
  cis7,

  // D
  D: {
    e: { fret: 2, finger: 2 },
    b: { fret: 3, finger: 3 },
    G: { fret: 2, finger: 1 },
  },
  D7: {
    e: { fret: 2, finger: 3 },
    b: { fret: 1, finger: 1 },
    G: { fret: 2, finger: 2 },
  },
  Dis,
  Dis7,
  Des: Cis,
  Des7: Cis7,
  d: {
    e: { fret: 1, finger: 1 },
    b: { fret: 3, finger: 3 },
    G: { fret: 2, finger: 2 },
  },
  d7: {},
  dis,
  dis7,
  des: cis,
  des7: cis7,

  // E
  E: {
    G: { fret: 1, finger: 1 },
    D: { fret: 2, finger: 3 },
    A: { fret: 2, finger: 2 },
  },
  E7: {},
  Es: Dis,
  Es7: Dis7,
  e: {
    D: { fret: 2, finger: 2 },
    A: { fret: 2, finger: 1 },
  },
  e7: {},
  es: dis,
  es7: dis7,

  // F
  F: {
    barre: {
      fret: 1,
      finger: 1,
      from: 'e',
      to: 'E',
    },

    G: { fret: 2, finger: 2 },
    D: { fret: 3, finger: 4 },
    A: { fret: 3, finger: 3 },
  },
  F7: {},
  Fis,
  Fis7,
  f: {
    barre: {
      fret: 1,
      finger: 1,
      from: 'e',
      to: 'E',
    },
    D: { fret: 3, finger: 4 },
    A: { fret: 3, finger: 3 },
  },
  f7: {},
  fis,
  fis7,

  // G
  G: {
    e: { fret: 3, finger: 4 },
    A: { fret: 2, finger: 1 },
    E: { fret: 3, finger: 2 },
  },
  G7: {},
  Gis,
  Gis7,
  Ges: Fis,
  Ges7: Fis7,
  g: {},
  g7: {},
  gis,
  gis7,
  ges: fis,
  ges7: fis7,

  // A
  A: {
    b: { fret: 2, finger: 3 },
    G: { fret: 2, finger: 2 },
    D: { fret: 2, finger: 1 },
  },
  A7: {},
  Ais,
  Ais7,
  As: Gis,
  As7: Gis7,
  a: {
    b: { fret: 1, finger: 1 },
    G: { fret: 2, finger: 3 },
    D: { fret: 2, finger: 2 },
  },
  a7: {},
  ais,
  ais7,
  as: gis,
  as7: gis7,

  // H
  H: {
    barre: {
      fret: 2,
      finger: 1,
      from: 'e',
      to: 'A',
    },
    b: { fret: 4, finger: 4 },
    G: { fret: 4, finger: 3 },
    D: { fret: 4, finger: 2 },
  },

  H7: {
    e: { fret: 2, finger: 4 },
    G: { fret: 2, finger: 3 },
    D: { fret: 1, finger: 1 },
    A: { fret: 2, finger: 2 },
  },
  B: Ais,
  B7: Ais7,
  h: {
    barre: {
      fret: 2,
      finger: 1,
      from: 'e',
      to: 'A',
    },
    b: { fret: 3, finger: 2 },
    G: { fret: 4, finger: 4 },
    D: { fret: 4, finger: 3 },
  },
  h7: {},
  b: ais,
  b7: ais7,
}
