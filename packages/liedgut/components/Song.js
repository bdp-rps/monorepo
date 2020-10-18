import React, { useState, useEffect } from 'react'
import { Text, Box, Spacer, Button, TextInput, useTheme } from '@bdp-rps/ui'

import Chord from './Chord'
import Notation from './Notation'

import renderAuthors from '../src/utils/renderAuthors'
import transposeChord from '../src/utils/transpose'
import * as transposeMelody from '../src/utils/transposeMelody'
import removeChords from '../src/utils/removeChords'
import chords from '../src/utils/chords'

export default function Song({
  content,
  title,
  tune,
  words,
  tempo,
  beat,
  translation,
  info,
  notation,
  textAreaRef,
}) {
  const [transpose, setTranspose] = useState(0)
  const [didMount, setDidMount] = useState(false)

  const step = parseInt(transpose) || 0

  useEffect(() => setDidMount(true), [])

  const usedChords = (content.match(/\{[A-Z0-9\(\)\/]*\}/gi) || [])
    .filter((chord, index, chords) => chords.indexOf(chord) === index)
    .map(chord => chord.replace(/[{}\(\)]/gi, ''))
    .reduce((usedChords, chord) => {
      const split = chord.split('/')
      split.forEach(c => {
        if (usedChords.indexOf(c) === -1) {
          usedChords.push(c)
        }
      })

      return usedChords
    }, [])

  const isB = usedChords.find(chord => chord.match(/(es|as|b)/gi) !== null)

  // TODO add takt & key to transposed
  let notationText, prefix, key

  if (notation) {
    key = notation.match(/K:\s*(\w)\s*(\w*)/) !== null ? '' : 'K:C\n'
    const transposedNotation =
      step > 0
        ? transposeMelody.up(key + notation, step, isB)
        : step < 0
        ? transposeMelody.down(key + notation, -step, isB)
        : key + notation

    prefix = 'T:' + title + '\n' + 'Q:1/4=' + tempo + '\n'
    notationText = prefix + transposedNotation
  }

  const theme = useTheme()

  const blocks = content.split(/(?:\r\n|\r|\n){2}/g).map(block => {
    const lines = block.split(/(?:\r\n|\r|\n)/g)

    return lines.map(line => {
      if (line.match(/{[A-Z0-9\(\)\/]+}/gi) === null) {
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
          <Box key={JSON.stringify(lines)} wrap="wrap">
            {lines.map(line => (
              <Box key={JSON.stringify(line)} direction="row" wrap="wrap">
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
                            paddingRight: 5,
                            color: theme.tokens.primary,
                          }}>
                          {p.chord ? transposeChord(p.chord, step, isB) : ' '}
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
        <Box alignItems="flex-start">
          <TextInput
            type="number"
            onChange={setTranspose}
            max={11}
            min={-11}
            value={transpose}
            label="Transponieren"
          />
        </Box>

        <Box direction="row" wrap="wrap">
          {usedChords.map(chord => {
            const transposed = transposeChord(chord, step, isB)

            if (transposed && chords[transposed]) {
              return (
                <Chord
                  name={transposed}
                  key={transposed}
                  chord={chords[transposed]}
                />
              )
            }

            return null
          })}
        </Box>
        {notationText && (
          <Box>
            <Notation
              notation={notationText}
              tempo={tempo}
              textAreaRef={textAreaRef}
              selectionOffset={prefix.length + key.length}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
