export const equivalent = {
  des: 'cis',
  es: 'dis',
  ges: 'fis',
  as: 'gis',
  b: 'ais',
}

const cis = {
  b: [{ fret: 1, finger: 2 }],
  G: [{ fret: 2, finger: 3 }],
  D: [{ fret: 1, finger: 1 }],
}
const cis7 = {}
const Cis = {}
const Cis7 = {}

const dis = {}
const dis7 = {}
const Dis = {}
const Dis7 = {}

const fis = {}
const fis7 = {}
const Fis = {
  e: [{ fret: 2, finger: 1 }],
  b: [{ fret: 2, finger: 1 }],
  G: [
    { fret: 2, finger: 1 },
    { fret: 3, finger: 2 },
  ],
  D: [
    { fret: 2, finger: 1 },
    { fret: 4, finger: 4 },
  ],
  A: [
    { fret: 2, finger: 1 },
    { fret: 4, finger: 3 },
  ],
  E: [{ fret: 2, finger: 1 }],
}
const Fis7 = {}

const gis = {}
const gis7 = {}
const Gis = {}
const Gis7 = {}

const ais = {}
const ais7 = {}
const Ais = {}
const Ais7 = {}

export default {
  // C
  C: {
    b: [{ fret: 1, finger: 1 }],
    D: [{ fret: 2, finger: 2 }],
    A: [{ fret: 3, finger: 3 }],
  },

  C7: {
    b: [{ fret: 1, finger: 1 }],
    G: [{ fret: 3, finger: 4 }],
    D: [{ fret: 2, finger: 2 }],
    A: [{ fret: 3, finger: 3 }],
  },
  Cis,
  Cis7,
  c: {},
  c7: {},
  cis,
  cis7,

  // D
  D: {
    e: [{ fret: 2, finger: 2 }],
    b: [{ fret: 3, finger: 3 }],
    G: [{ fret: 2, finger: 1 }],
  },
  D7: {},
  Dis,
  Dis7,
  Des: Cis,
  Des7: Cis7,
  d: {},
  d7: {},
  dis,
  dis7,
  des: cis,
  des7: cis7,

  // E
  E: {
    G: [{ fret: 1, finger: 1 }],
    D: [{ fret: 2, finger: 3 }],
    A: [{ fret: 2, finger: 2 }],
  },
  E7: {},
  Es: Dis,
  Es7: Dis7,
  e: {
    D: [{ fret: 2, finger: 2 }],
    A: [{ fret: 2, finger: 1 }],
  },
  e7: {},
  es: dis,
  es7: dis7,

  // F
  F: {
    e: [{ fret: 1, finger: 1 }],
    b: [{ fret: 1, finger: 1 }],
    G: [
      { fret: 1, finger: 1 },
      { fret: 2, finger: 2 },
    ],
    D: [
      { fret: 1, finger: 1 },
      { fret: 3, finger: 4 },
    ],
    A: [
      { fret: 1, finger: 1 },
      { fret: 3, finger: 3 },
    ],
    E: [{ fret: 1, finger: 1 }],
  },
  F7: {},
  Fis,
  Fis7,
  f: {},
  f7: {},
  fis,
  fis7,

  // G
  G: {
    e: [{ fret: 3, finger: 4 }],
    A: [{ fret: 2, finger: 1 }],
    E: [{ fret: 3, finger: 2 }],
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
    b: [{ fret: 2, finger: 3 }],
    G: [{ fret: 2, finger: 2 }],
    D: [{ fret: 2, finger: 1 }],
  },
  A7: {},
  Ais,
  Ais7,
  As: Gis,
  As7: Gis7,
  a: {
    b: [{ fret: 1, finger: 1 }],
    G: [{ fret: 2, finger: 3 }],
    D: [{ fret: 2, finger: 2 }],
  },
  a7: {},
  ais,
  ais7,
  as: gis,
  as7: gis7,

  // H
  H: {},
  H7: {},
  B: Ais,
  B7: Ais7,
  h: {},
  h7: {},
  b: ais,
  b7: ais7,
}
