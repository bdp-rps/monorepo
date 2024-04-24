import React, { Fragment } from 'react'
import { Page, Text, View } from '@bdp-rps/react-pdf-renderer'

import renderAuthors from '../utils/renderAuthors'

function getSpecialSettings(specialSettings, context) {
  const settings = specialSettings?.[context] || []

  if (!Array.isArray(settings)) {
    return []
  }

  return settings.reverse()
}

const context = 'holzwurm'

export default function Song({
  title,
  content,
  translation,
  year,
  beat,
  tempo,
  words,
  tune,
  specialSettings,
}) {
  const settings = getSpecialSettings(specialSettings, context)

  function getSpecialStyle(t, block, line) {
    const setting = settings.find(({ type, blocks, lines }) => {
      if (type === t) {
        if (
          type === 'block' &&
          (blocks === undefined || blocks.includes(block)) &&
          lines === undefined
        ) {
          return true
        }

        if (
          type === 'space' &&
          (blocks === undefined || blocks.includes(block))
        ) {
          return true
        }

        if (
          type === 'line' &&
          (blocks === undefined || blocks.includes(block)) &&
          (lines === undefined || lines.includes(line))
        ) {
          return true
        }

        if (
          type === 'chord' &&
          (blocks === undefined || blocks.includes(block)) &&
          (lines === undefined || lines.includes(line))
        ) {
          return true
        }
      }
    })

    return setting?.style || {}
  }

  const blocks = content.split(/(?:\r\n|\r|\n){2}/g).map((block) => {
    const lines = block.split(/(?:\r\n|\r|\n)/g)

    return lines.map((line) => {
      if (line.match(/{[A-Z0-9]+}/gi) === null) {
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

  const hasTranslation = translation.length > 0
  const translationText = hasTranslation
    ? `\nÜbesetzung: ${renderAuthors(translation).join('; ')}`
    : ''
  const wordsText = renderAuthors(words).join('; ')
  const tuneText = renderAuthors(tune).join('; ')
  const isSameAuthor = wordsText === tuneText
  const shouldOneLine = settings.find(
    (entry) => entry.type === 'authors_single_line'
  )

  return (
    <Page
      size={[297.63, 419.52]}
      orientation="landscape"
      style={{
        paddingTop: '3mm',
        paddingBottom: '15mm',
        fontSize: 10,
        lineHeight: 1.2,
        fontFamily: 'Bell Gothic Bold',
      }}>
      <View
        fixed
        render={({ pageNumber, subPageNumber }) => (
          <View
            style={{
              left: pageNumber % 2 === 0 ? '15mm' : '5mm',
              right: pageNumber % 2 === 0 ? '5mm' : '15mm',
            }}>
            <Text
              fixed
              style={{
                fontSize: 12,
              }}
              render={({ subPageNumber }) =>
                subPageNumber === 1 ? title : ' '
              }
            />
          </View>
        )}
      />

      <View
        fixed
        style={{
          position: 'absolute',
          textAlign: 'right',
          position: 'absolute',
          fontFamily: 'Bell Gothic',
          top: '3mm',
          left: 0,
          right: 0,
          fontSize: 8,
          lineHeight: 1,
          textAlign: 'right',
        }}
        render={({ pageNumber }) => (
          <View
            style={{
              paddingRight: pageNumber % 2 === 0 ? '5mm' : '15mm',
            }}>
            <Text
              fixed
              render={({ subPageNumber }) =>
                subPageNumber === 1 ? `Takt: ${beat}` : ' '
              }
            />
          </View>
        )}></View>
      <Text style={{ fontSize: 5 }}>{' '}</Text>
      <View>
        {blocks.map((lines, index, arr) => (
          <View
            key={JSON.stringify(lines)}
            wrap={false}
            style={getSpecialStyle('block', index + 1)}>
            {lines.map((line, i) => {
              return (
                <View
                  key={JSON.stringify(line)}
                  fixed
                  render={({ pageNumber }) => (
                    <View>
                      <View
                        fixed
                        style={{
                          fontFamily: 'Bell Gothic',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          maxWidth: '128mm',
                          left: pageNumber % 2 === 0 ? '15mm' : '5mm',
                          right: pageNumber % 2 === 0 ? '5mm' : '15mm',
                          ...getSpecialStyle('line', index + 1, i + 1),
                        }}>
                        {typeof line === 'string' ? (
                          <Text wrap={false}>{line ? line : ' '}</Text>
                        ) : (
                          line.map((p) => (
                            <Fragment key={p.chord + p.word}>
                              <View
                                style={{
                                  display: 'inline-flex',
                                  flexDirection: 'column',
                                  alignItems: 'flex-start',
                                }}>
                                <Text
                                  style={{
                                    transform: 'translate(0, 1px)',
                                    fontFamily: 'Bell Gothic Bold',
                                    lineHeight: 1.125,
                                    ...getSpecialStyle(
                                      'chord',
                                      index + 1,
                                      i + 1
                                    ),
                                  }}>
                                  {p.chord || ' '}
                                </Text>

                                <Text>{p.word}</Text>
                              </View>
                            </Fragment>
                          ))
                        )}
                      </View>
                    </View>
                  )}
                />
              )
            })}
            {index < arr.length - 1 && (
              <Text
                style={{
                  lineHeight: 1.15,
                  ...getSpecialStyle('space', index + 1),
                }}>
                {' '}
              </Text>
            )}
          </View>
        ))}
      </View>
      <View
        fixed
        style={{
          position: 'absolute',
          bottom: '0mm',
          fontFamily: 'Bell Gothic',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
        }}
        render={({ pageNumber, subPageNumber, subPageTotalPages }) => (
          <View
            style={{
              paddingLeft: pageNumber % 2 === 0 ? '15mm' : '5mm',
              paddingRight: pageNumber % 2 === 0 ? '5mm' : '15mm',
            }}>
            <Text
              fixed
              style={{
                paddingBottom: shouldOneLine || isSameAuthor ? '10mm' : '12mm',
                fontSize: 8,
                lineHeight: 1.05,
              }}
              render={({ subPageNumber, subPageTotalPages }) => {
                if (subPageNumber !== subPageTotalPages) {
                  return ''
                }

                if (isSameAuthor) {
                  return `Worte & Weise: ${wordsText}` + translationText
                }

                return (
                  `Worte: ${renderAuthors(words).join('; ')}${
                    shouldOneLine ? '    ' : '\n'
                  }Weise: ${tuneText}` + translationText
                )
              }}
            />
          </View>
        )}
      />
      <View
        fixed
        style={{
          position: 'absolute',
          fontFamily: 'Bell Gothic',
          bottom: '6mm',
          left: '5mm',
          right: '5mm',
          lineHeight: 1,
        }}
        render={({ pageNumber }) => (
          <View>
            <Text
              fixed
              style={{
                fontSize: 10,
                textAlign: pageNumber % 2 === 0 ? 'right' : 'left',
              }}
              render={({ pageNumber }) => pageNumber.toString()}
            />
          </View>
        )}
      />
    </Page>
  )
}
