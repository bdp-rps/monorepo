import { Text, Box, Spacer, Button, useTheme } from '@bdp-rps/ui'

import renderAuthors from '@bdp-rps/liedgut/lib/utils/renderAuthors'

export default function Song({
  content,
  title,
  tune,
  words,
  tempo,
  beat,
  translation,
  info,
}) {
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
      <Spacer size={2} />
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
                          {p.chord || ' '}
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

      <Box gap={4}>
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

          {translation ? (
            <Text intent="note">
              Übesetzung: {renderAuthors(translation).join('; ')}
            </Text>
          ) : null}
        </Box>
        <Box>
          <Text intent="note">Tempo: {tempo}</Text>
          <Text intent="note">Takt: {beat}</Text>
        </Box>
      </Box>
    </Box>
  )
}
