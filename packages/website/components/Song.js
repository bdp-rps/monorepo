import React, { useState, useEffect } from 'react'
import { Text, Box, Spacer, Button, TextInput, useTheme } from '@bdp-rps/ui'

import renderAuthors from '@bdp-rps/liedgut/lib/utils/renderAuthors'

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

const checkDur = chord =>
  chord.substr(0, 1).toLowerCase() !== chord.substr(0, 1)

const transposeChord = (chord, transpose) => {
  if (transpose === 0) {
    return chord
  }

  const isDur = checkDur(chord)

  if (chords.indexOf(chord.toLowerCase()) === -1) {
    chord = bMap[chord.toLowerCase()]
  }

  const index = chords.indexOf(chord.toLowerCase())

  let newIndex

  if (transpose > 0 && index + transpose > chords.length - 1) {
    newIndex = transpose - (chords.length - index)
  } else if (transpose < 0 && index + transpose < 0) {
    newIndex = chords.length + (index + transpose)
  } else {
    newIndex = index + transpose
  }

  const newChord = chords[newIndex]

  if (isDur) {
    return newChord.substr(0, 1).toUpperCase() + newChord.substr(1)
  }

  return newChord
}

export default function Song(props) {
  const {
    content,
    title,
    tune,
    words,
    tempo,
    beat,
    translation,
    info,
    notation,
  } = props
  const [transpose, setTranspose] = useState('0')
  const [didMount, setDidMount] = useState(false)

  const json = JSON.stringify(props)
  useEffect(() => setDidMount(true), [])

  let melody
  if (didMount && notation) {
    const { Notation, Midi } = require('react-abc')

    // set soundfont (see https://github.com/gleitz/midi-js-soundfonts)
    const midi = require('abcjs/src/midi/abc_midi_controls')
    // midi.setSoundFont('https://gleitz.github.io/midi-js-soundfonts/FatBoy/')

    const notationText =
      'T:' + title + '\n' + 'Q:1/4=' + tempo + '\n' + notation
    try {
      melody = (
        <Box>
          <Box
            extend={{
              '> div': {
                overflow: 'auto !important',
                width: '100%',
              },
            }}>
            <Notation notation={notationText} />
          </Box>
          <Box maxWidth={300}>
            <Midi
              notation={notation.replace(/\"[a-z0-9]*\"/gi, '')}
              midiParams={{
                qpm: tempo,
              }}
            />
          </Box>
        </Box>
      )
    } catch (e) {
      console.error(e)
    }
  }

  const theme = useTheme()

  const blocks = content.split(/(?:\r\n|\r|\n){2}/g).map(block => {
    const lines = block.split(/(?:\r\n|\r|\n)/g)

    return lines.map(line => {
      if (line.match(/{[A-Z0-9]+}/gi) === null) {
        return line
      }

      return line
        .split(/{/gi)
        .filter(v => v.length > 1)
        .map(pair => {
          const s = pair.split(/}/gi)

          if (s.length === 1) {
            return {
              word: s[0].replace(/^ /gi, ' '),
            }
          }

          return {
            chord: s[0],
            word: s[1].replace(/^ /gi, ' '),
          }
        })
    })
  })

  return (
    <Box>
      <Text intent="category">{title}</Text>
      <Spacer size={4} />
      <Box>
        {blocks.map(lines => (
          <Box wrap="wrap">
            {lines.map(line => (
              <Box direction="row" wrap="wrap">
                {typeof line === 'string' ? (
                  <Text>{line ? line : ' '}</Text>
                ) : (
                  line.map((p, index) => (
                    <>
                      <Box
                        display="inline-flex"
                        alignItems="flex-start"
                        paddingTop={1}>
                        <Text
                          extend={{
                            transform: 'translate(0, 1px)',
                            lineHeight: 0.8,
                            color: theme.tokens.primary,
                          }}>
                          {p.chord
                            ? transposeChord(p.chord, parseInt(transpose))
                            : ' '}
                        </Text>

                        <Text>{p.word.replace(/ $/, ' ')}</Text>
                      </Box>
                    </>
                  ))
                )}
              </Box>
            ))}
            <Box>
              <Text>{' '}</Text>
            </Box>
          </Box>
        ))}
      </Box>

      <Box space={4}>
        <hr />
        <Box>
          <Text
            intent="note"
            extend={{ fontStyle: 'italic', color: theme.foreground }}>
            {info}
          </Text>
        </Box>
        <Box>
          {JSON.stringify(words) === JSON.stringify(tune) ? (
            <Text intent="note">
              Worte & Weise: {renderAuthors(words).join('; ')}
            </Text>
          ) : (
            <Box>
              <Text intent="note">
                Worte: {renderAuthors(words).join('; ')}
              </Text>
              <Text intent="note">Weise: {renderAuthors(tune).join('; ')}</Text>
            </Box>
          )}

          {translation && translation.length > 0 ? (
            <Text intent="note">
              Übesetzung: {renderAuthors(translation).join('; ')}
            </Text>
          ) : null}
        </Box>
        <Box>
          <Text intent="note">Tempo: {tempo}</Text>
          <Text intent="note">Takt: {beat}</Text>
        </Box>
        {/* <Box alignItems="flex-start">
          <TextInput
            type="number"
            onChange={setTranspose}
            max={14}
            min={-14}
            value={transpose}
            label="Transponieren"
          />
        </Box> */}
        <Box>{melody}</Box>
      </Box>
    </Box>
  )
}
