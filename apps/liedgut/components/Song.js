import React, { useState, useEffect } from 'react'
import { Text, Box, Spacer, Button, TextInput, useTheme } from '@bdp-rps/ui'
import { renderAuthors, chords } from '@bdp-rps/liedgut'

import Chord from './Chord'
import Notation from './Notation'

import normalizeChord from '../utils/normalizeChord'
import transposeChord from '../utils/transposeChord'
import removeChords from '../utils/removeChords'

export default function Song({
  content,
  title,
  alternativeTitle,
  tune,
  words,
  tempo,
  musicalKey,
  beat,
  translation,
  info,
  notation,
  textAreaRef,
}) {
  const key = musicalKey

  const [transpose, setTranspose] = useState(0)
  const [didMount, setDidMount] = useState(false)

  const step = Math.max(-11, Math.min(parseInt(transpose) || 0, 11))

  useEffect(() => setDidMount(true), [])

  const usedChords = (content.match(/\{[A-Z0-9\(\)\/]*\}/gi) || [])
    .filter((chord, index, chords) => chords.indexOf(chord) === index)
    .map((chord) => chord.replace(/[{}\(\)]/gi, ''))
    .reduce((usedChords, chord) => {
      const split = chord.split('/')
      split.forEach((c) => {
        if (usedChords.indexOf(c) === -1) {
          usedChords.push(c)
        }
      })

      return usedChords
    }, [])

  const isB = usedChords.find((chord) => chord.match(/(es|as|b)/gi) !== null)

  const theme = useTheme()

  const blocks = content.split(/(?:\r\n|\r|\n){2}/g).map((block) => {
    const lines = block.split(/(?:\r\n|\r|\n)/g)

    return lines.map((line) => {
      if (line.match(/{[A-Z0-9\(\)\/]+}/gi) === null) {
        return line
      }

      return line
        .split(/{/gi)
        .filter((v) => v.length > 1)
        .map((pair) => {
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
      <Text variant="category">{title}</Text>
      {!alternativeTitle ? null : (
        <Box>
          <Text variant="note">
            Alternativ: {alternativeTitle.replace('\n', ', ')}
          </Text>
        </Box>
      )}
      <Spacer size={4} />
      <Box>
        {blocks.map((lines) => (
          <Box key={JSON.stringify(lines)} wrap="wrap">
            {lines.map((line) => (
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
            variant="note"
            extend={{
              fontStyle: 'italic',
              color: theme.foreground,
            }}>
            <span
              dangerouslySetInnerHTML={{
                __html: info.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              }}
            />
          </Text>
        </Box>
        <Box>
          {JSON.stringify(words) === JSON.stringify(tune) ? (
            <Text variant="note">
              Worte & Weise: {renderAuthors(words).join('; ')}
            </Text>
          ) : (
            <Box>
              <Text variant="note">
                Worte: {renderAuthors(words).join('; ')}
              </Text>
              <Text variant="note">
                Weise: {renderAuthors(tune).join('; ')}
              </Text>
            </Box>
          )}

          {translation && translation.length > 0 ? (
            <Text variant="note">
              Übesetzung: {renderAuthors(translation).join('; ')}
            </Text>
          ) : null}
        </Box>
        <Box>
          <Text variant="note">Tempo: {tempo}</Text>
          <Text variant="note">Takt: {beat}</Text>
        </Box>

        <Box alignItems="flex-start">
          <TextInput
            type="number"
            onChange={(e) => setTranspose(e.target.value)}
            max={11}
            min={-11}
            value={transpose}
            label="Transponieren"
          />
        </Box>

        <Box direction="row" wrap="wrap">
          {usedChords.map((chord) => {
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
        {notation && (
          <Box>
            <Notation
              notation={notation}
              beat={beat}
              tempo={tempo}
              title={title}
              transpose={step}
              musicalKey={musicalKey}
              author={renderAuthors(tune)}
              textAreaRef={textAreaRef}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
