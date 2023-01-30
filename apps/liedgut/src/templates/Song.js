import React, { Fragment } from 'react'
import { Page, Text, View } from '@bdp-rps/react-pdf-renderer'

import renderAuthors from '../utils/renderAuthors'

export default function Song({
  title,
  content,
  translation,
  year,
  beat,
  tempo,
  words,
  tune,
}) {
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

  return (
    <Page
      size={[297.63, 419.52]}
      orientation="landscape"
      style={{
        paddingTop: '5mm',
        paddingBottom: '15mm',
        fontSize: 10,
        lineHeight: 1.2,
        fontFamily: 'Bell Gothic Bold',
      }}
    >
      <View
        fixed
        render={({ pageNumber }) => (
          <View
            style={{
              left: pageNumber % 2 === 0 ? '15mm' : '5mm',
              right: pageNumber % 2 === 0 ? '5mm' : '15mm',
            }}
          >
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
          top: '5mm',
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
            }}
          >
            <Text
              fixed
              render={({ subPageNumber }) =>
                subPageNumber === 1 ? `Takt: ${beat}\nTempo: ${tempo}` : ' '
              }
            />
          </View>
        )}
      ></View>
      <Text>{' '}</Text>
      <View>
        {blocks.map((lines) => (
          <View key={JSON.stringify(lines)} wrap={false}>
            {lines.map((line) => {
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
                        }}
                      >
                        {typeof line === 'string' ? (
                          <Text wrap={false}>{line ? line : ' '}</Text>
                        ) : (
                          line.map((p, index) => (
                            <Fragment key={p.chord + p.word}>
                              <View
                                style={{
                                  display: 'inline-flex',
                                  flexDirection: 'column',
                                  alignItems: 'flex-start',
                                }}
                              >
                                <Text
                                  style={{ transform: 'translate(0, 1px)' }}
                                >
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
            <Text>{' '}</Text>
          </View>
        ))}
      </View>
      <View
        fixed
        style={{
          position: 'absolute',
          bottom: 0,
          fontFamily: 'Bell Gothic',
          marginBottom: '13mm',
          paddingBottom: '2pt',
          alignContent: 'flex-end',
        }}
        render={({ pageNumber }) => (
          <View
            style={{
              paddingLeft: pageNumber % 2 === 0 ? '15mm' : '5mm',
              paddingRight: pageNumber % 2 === 0 ? '5mm' : '15mm',
            }}
          >
            <Text
              fixed
              style={{
                fontSize: 8,
                lineHeight: 1.1,
              }}
              render={({ subPageNumber, subPageTotalPages }) =>
                subPageNumber === subPageTotalPages
                  ? (JSON.stringify(words) === JSON.stringify(tune)
                      ? (translation.length > 0 ? '' : '\n') +
                        `Worte & Weise: ${renderAuthors(words).join('; ')}`
                      : `Worte: ${renderAuthors(words).join(
                          '; '
                        )}\nWeise: ${renderAuthors(tune).join('; ')}`) +
                    (translation.length > 0
                      ? `\nÜbesetzung: ${renderAuthors(translation).join('; ')}`
                      : '')
                  : ''
              }
            />
          </View>
        )}
      />
      <View
        fixed
        style={{
          position: 'absolute',
          fontFamily: 'Bell Gothic',
          bottom: '7mm',
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
