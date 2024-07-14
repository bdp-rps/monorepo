import React from 'react'
import { Document } from '@bdp-rps/react-pdf-renderer'

import Song from './Song'

const songs = [
  'abends',
  'abends-treten-elche-aus-den-duenen',
  'der-tramper',
  'die-sandbank',
  'piratenhafen',
  'fahrt-in-den-herbst',
  'tschiree',
  'am-ural',
  'der-rabe',
  'nicht-nur-nebenbei',
  'das-wochenlied',
  'andre-die-das-land-so-sehr-nicht-liebten',
  'fiddlers-green',
  'bobbys-fernweh',
  'banner',
  'auf-vielen-strassen-dieser-welt',
  'schon-so-lang',
  'bleib-stehn-alte-dampflock',
  'black-is-the-colour',
  'triodimali',
  'mori-shej',
  'aje-ukarije',
  'walk-with-the-wind',
  'daemmert-von-fern',
  'kaffee-und-karin',
  'ein-junges-lied',
  'papst-und-sultan',
  'der-zug',
  'die-grenze',
  'die-daemmerung-fllt',
  'die-klampfen-erklingen',
  'die-kraniche-fliegen-im-keil',
  'die-lappen-hoch',
  'die-schluchten-des-balkans',
  'hochzeit',
  'diregelt',
  'dort-an-dem-ueferchen',
  'sonnenschein-und-wilde-feste',
  'drei-tropfen-blut',
  'du-schoener-leichtfuss',
  'zum-nebel',
  'ach-liebes-sage-mir',
  'ein-hotdog-unten-am-hafen',
  'ein-stolzes-schiff',
  'die-nussbraune-maid',
  'die-horte-kommt',
  'die-tippelei',
  'endlos-sind-jene-strassen',
  'es-fuehrt-ber-den-main',
  'die-drei-glaenzenden-kugeln',
  'es-war-an-einem-sommertag',
  'nachtfahrt',
  'drill-ye-terriers',
  'fahr-mein-kind',
  'hyazinthen',
  'tod-und-mediziner',
  'hoch-im-norden',
  'gospodar',
  'winterlied',
  'gute-nacht-kameraden',
  'heute-hier-morgen-dort',
  'buendische-vaganten',
  'an-land',
  'ostseewinter',
  'the-black-and-tans',
  'dornen-und-steine',
  'ich-kenne-europas-zonen',
  'seemannsmaetresse',
  'die-schlesischen-weber',
  'drei-rote-pfiffe',
  'die-ballade-vom-roten-haar',
  'die-freie-republik',
  'in-die-sonne-die-ferne-hinaus',
  'molly-malone',
  'gori-kaseki',
  'jerchenkow',
  'sturm-und-drang',
  'landrattenschar',
  'piratenlied',
  'die-backsteinmauer',
  'unter-dem-pflaster',
  'lustig-lustig',
  'makedonsko-devojce',
  'paporaki',
  'man-sagt',
  'manchmal-des-nachts',
  'lilas-blanches',
  'muro-shavo',
  'nachts-auf-dem-dorfplatz',
  'nane-tsocha',
  'nehmt-abschied-brueder',
  'ziehharmonika',
  'santiano',
  'nordwaerts',
  'westwaerts',
  'nun-greift-in-die-saiten',
  'o-bootsmann',
  'buergerlied',
  'regen-regen',
  'mker',
  'roter-mond',
  'roter-wein-im-becher',
  'kiefern-im-wind',
  'schlaflied-fuer-anne',
  'schliess-aug-und-ohr',
  'lumpenbruederschaft',
  'trinklied-vorm-abgang',
  'tumbalalaika',
  'geburtstagslied',
  'edelweisspiraten',
  'jasmin',
  'lied-der-schmiede',
  'ten-thousand-miles-away',
  'der-apfel',
  'der-pfahl',
  'das-schiff-im-nebel',
  'der-wagen',
  'sardegna',
  'der-kleine-troll',
  'humor',
  'steuermann-ho',
  'i-gorgona',
  'stunde-der-orangen',
  'tommi',
  'die-zunft-der-strassenbrueder',
  'ride-on',
  'tsen-brider',
  'tanzlied-der-spielleute',
  'zug-der-schwaene',
  'lasst-uns-singen',
  'und-ob-der-sturm',
  'balkanlied',
  'ungarische-hochzeit',
  'unter-den-toren',
  'raubritter',
  'viva-la-feria',
  'jalava',
  'der-alte-fahrtengaenger',
  'regenbogenlied',
  'palzlied',
  'warum-zoegerst-du-noch',
  'ein-krampenschlag-vor-tag',
  'was-helfen-mir-tausend-dukaten',
  'tanzlied-des-totenschiffes',
  'piet-am-galgen',
  'das-stundenglas',
  'the-colliery-gate',
  'the-road',
  'was-uns-laesst-fahren',
  'welle-wogte',
  'ulanen',
  'schlaflied-des-franzes',
  'wenn-das-feuer-hell-und-heiss',
  'wenn-der-abend-naht',
  'wenn-der-fruehling-kommt',
  'wenn-die-buerger-schlafen-gehn',
  'nacht-in-portugal',
  'der-raschler',
  'wenn-hell-die-goldne-sonne-lacht',
  'both-sides-the-tweed',
  'piratenbraut',
  'wilde-reiter',
  'wir-drei-wir-gehn-jetzt-auf-die-walze',
  'leezie-lindsay',
  'wir-kamen-einst-von-piemont',
  'big-bomb-dolly',
  'ore-ore',
  'wir-sind-die-rheinischen-vandalen',
  'wir-sind-eine-kleine-verloren-schar',
  'zuhause',
  'fruehlingslied',
  'chanson-fuer-morgen',
  'wir-zogen-in-das-feld',
  'die-moorsoldaten',
  'wos-nur-felsen-gibt',
  'ye-jacobites',
  'ballade-von-der-gemeinsamen-zeit',
]

const songData = songs.map((song) => require('../songs/' + song + '.json'))

function normalize(str) {
  return str
    .replace(/{[a-z0-9]+}|\/:|:\/|(,')/gi, '')
    .toLowerCase()
    .trim()
}

function normalizeContent(content) {
  const lines = content
    .split('\n')
    .filter(Boolean)
    .filter(
      (line) =>
        line.match(/(Vorspiel|Vor- und Zwischenspiel|Zwischenspiel)/) === null
    )

  return lines
    .join('')
    .replace(/{[a-z0-9]+}|\/:|:\/|(,')/gi, '')
    .toLowerCase()
    .trim()
}

function getTableOfContents() {
  const data = songData.reduce((toc, { title, alternativeTitle }) => {
    const titles = [title, ...alternativeTitle.split(',').filter(Boolean)]

    titles.forEach((title) => {
      const char = title.charAt(0).toLowerCase()

      toc[char] = toc[char] || []
      toc[char].push(title)
      toc[char] = toc[char].sort()
    })

    return toc
  }, {})

  return Object.keys(data)
    .sort()
    .reduce((toc, char) => {
      toc[char] = data[char]
      return toc
    }, {})
}

export default () => (
  <Document>
    {songData
      // .sort((a, b) => {
      //   const tA = normalizeContent(a.content)
      //   const tB = normalizeContent(b.content)

      //   if (tA.startsWith('17')) {
      //     return 1
      //   }

      //   if (tB.startsWith('17')) {
      //     return -1
      //   }

      //   return tA > tB ? 1 : -1
      // })
      .map((data) => (
        <Song key={data.title} {...data} />
      ))}
  </Document>
)
