import React, { useState, createContext, useEffect, useContext } from 'react'
import {
  Box,
  Button,
  TextArea,
  TextInput,
  SelectInput,
  Checkbox,
  Text,
  useTheme,
} from '@bdp-rps/ui'

import Song from '../components/Song'
import Modal from '../components/Modal'
import ListItem from '../components/ListItem'
import Loading from '../components/Loading'
import renderAuthors from '../src/utils/renderAuthors'

const defaultSong = {
  notation: '',
  content: '',
  title: '',
  words: [],
  tune: [],
  translation: [],
  beat: '4/4',
  tempo: 60,
  info: '',
}

const TabNavContext = createContext()

const TabNav = ({ onChange, style, extend, children }) => (
  <TabNavContext.Provider value={{ onChange }}>
    <Box
      as="nav"
      direction="row"
      justifyContent="flex-start"
      style={style}
      extend={[style, extend]}>
      {children}
    </Box>
  </TabNavContext.Provider>
)

const TabNavItem = ({ disabled = false, id, active, children }) => {
  const { onChange } = useContext(TabNavContext)
  const theme = useTheme()

  return (
    <Box
      alignSelf="auto"
      minWidth={50}
      paddingTop={2}
      paddingBottom={1.5}
      marginLeft={2}
      marginRight={2}
      extend={[
        {
          userSelect: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition:
            'border-bottom-color 200ms ease-in-out, color 200ms ease-in-out',
          borderBottomWidth: 3,
          borderBottomStyle: 'solid',
          borderBottomColor: active ? theme.tokens.primary : 'transparent',
        },
      ]}
      onClick={() => {
        if (!disabled) {
          onChange(id)
        }
      }}>
      <Text
        extend={{
          fontFamily: theme.fonts.content,
        }}
        color={
          disabled
            ? theme.tokens.inputDisabledForeground
            : active
            ? theme.tokens.primary
            : theme.tokens.foreground
        }>
        {children}
      </Text>
    </Box>
  )
}

const defaultAuthor = {
  name: '',
  nickname: '',
  group: '',
  organisation: '',
  year: '',
}

const defaultSubmitter = {
  name: '',
  mail: '',
  content: '',
}

export default function SongForm({ initialSong = defaultSong, onSubmit }) {
  const [song, setSong] = useState(initialSong)
  const [author, setAuthor] = useState(defaultAuthor)
  const [submitter, setSubmitter] = useState(defaultSubmitter)
  const [tab, setTab] = useState('details')
  const [authorVisible, setAuthorVisible] = useState(false)
  const [wordsAndTune, setWordsAndTune] = useState(false)
  const [authorMode, setAuthorMode] = useState()
  const [sendVisible, setSendVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)

  return (
    <Box
      direction={['column', , , 'row']}
      grow={1}
      alignSelf="stretch"
      maxHeight="calc(100% - 50px)">
      <Box grow={[1, , , 0]} basis="40%">
        <TabNav onChange={setTab}>
          <TabNavItem active={tab === 'details'} id="details">
            Details
          </TabNavItem>
          <TabNavItem active={tab === 'text'} id="text">
            Liedtext
          </TabNavItem>
          <TabNavItem active={tab === 'melody'} id="melody">
            Melodie
          </TabNavItem>
        </TabNav>
        <Box grow={1} extend={{ backgroundColor: 'rgb(245, 245, 245)' }}>
          <Box
            grow={1}
            space={4}
            padding={5}
            display={tab === 'details' ? 'flex' : 'none'}>
            <TextInput
              label="Titel"
              value={song.title}
              onChange={title => setSong({ ...song, title })}
            />
            <TextInput
              type="number"
              label="Tempo"
              value={song.tempo}
              onChange={tempo => setSong({ ...song, tempo })}
            />
            <SelectInput
              label="Takt"
              value={song.beat}
              onChange={beat => setSong({ ...song, beat })}>
              <option value="1/2">1/2</option>
              <option value="2/4">2/4</option>
              <option value="3/4">3/4</option>
              <option value="4/4">4/4</option>
              <option value="5/4">5/4</option>
              <option value="6/8">6/8</option>
            </SelectInput>
            <TextArea
              label="Zusatz-Information"
              description="z.B. Worterklärung, Ergänzungen oder Widmungen"
              value={song.info}
              onChange={info => setSong({ ...song, info })}
            />

            <Box space={1}>
              <Text intent="label">Worte</Text>

              <Box>
                {song.words.map(author => (
                  <ListItem>
                    <Box direction="row" space={2} alignItems="center">
                      <Text>{renderAuthors([author])}</Text>

                      <Box direction="row" alignSelf="flex-end" space={2}>
                        <Button
                          variant="secondary"
                          size="small"
                          intent="negative"
                          onClick={() =>
                            setSong({
                              ...song,
                              words: song.words.filter(a => author !== a),
                            })
                          }>
                          Löschen
                        </Button>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </Box>
              <Box alignSelf="flex-start">
                <Button
                  onClick={() => {
                    setAuthorMode('words')
                    setAuthorVisible(true)
                  }}>
                  Hinzufügen
                </Button>
              </Box>
            </Box>

            <Box space={1}>
              <Text intent="label">Weise</Text>

              <Box>
                {song.tune.map(author => (
                  <ListItem>
                    <Box direction="row" space={2} alignItems="center">
                      <Text>{renderAuthors([author])}</Text>

                      <Box direction="row" alignSelf="flex-end" space={2}>
                        <Button
                          variant="secondary"
                          size="small"
                          intent="negative"
                          onClick={() =>
                            setSong({
                              ...song,
                              tune: song.tune.filter(a => author !== a),
                            })
                          }>
                          Löschen
                        </Button>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </Box>
              <Box alignSelf="flex-start">
                <Button
                  onClick={() => {
                    setAuthorMode('tune')
                    setAuthorVisible(true)
                  }}>
                  Hinzufügen
                </Button>
              </Box>
            </Box>
            <Modal
              visible={authorVisible}
              onClose={() => setAuthorVisible(false)}>
              <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Autor hinzufügen</Text>
                <TextInput
                  value={author.name}
                  onChange={name => setAuthor({ ...author, name })}
                  label="Name"
                />
                <TextInput
                  value={author.nickname}
                  onChange={nickname => setAuthor({ ...author, nickname })}
                  label="Fahrtenname"
                />
                <TextInput
                  value={author.group}
                  onChange={group => setAuthor({ ...author, group })}
                  label="Gruppe"
                />
                <TextInput
                  value={author.organisation}
                  onChange={organisation =>
                    setAuthor({ ...author, organisation })
                  }
                  label="Organisation"
                />
                <TextInput
                  value={author.year}
                  onChange={year => setAuthor({ ...author, year })}
                  label="Jahr"
                />
                <Checkbox
                  name="words-and-tune"
                  label="Weise & Worte"
                  value={wordsAndTune}
                  onChange={setWordsAndTune}
                />
                <Box paddingTop={2} space={2}>
                  <Button
                    onClick={() => {
                      if (wordsAndTune) {
                        setSong({
                          ...song,
                          words: [...song.words, author],
                          tune: [...song.tune, author],
                        })
                      } else {
                        setSong({
                          ...song,
                          [authorMode]: [...song[authorMode], author],
                        })
                      }

                      setAuthor(defaultAuthor)
                      setAuthorVisible(false)
                    }}>
                    Hinzufügen
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setAuthor(defaultAuthor)
                      setAuthorVisible(false)
                    }}>
                    Abbrechen
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box
            grow={1}
            space={5}
            padding={5}
            display={tab === 'text' ? 'flex' : 'none'}>
            <TextArea
              extend={{ minHeight: 400, flexGrow: 1 }}
              label="Liedtext"
              description="Akkorde können im Text in Klammern markiert werden. z.B. Ein {e}Akk{D7}ord."
              value={song.content}
              onChange={content =>
                setSong({
                  ...song,
                  content,
                })
              }
            />
          </Box>
          <Box
            grow={1}
            space={5}
            padding={5}
            display={tab === 'melody' ? 'flex' : 'none'}>
            <TextArea
              extend={{ minHeight: 400, flexGrow: 1 }}
              label="Melody"
              name="melody"
              description={
                <>
                  Die Melodie wird im ABC-Format notiert. z.B. "C2DE2F Bc|A4B4"
                  <br />
                  Achtung: Die Wiedergabe funktioniert am besten in Chrome und
                  Firefox.
                </>
              }
              value={song.notation}
              onChange={notation =>
                setSong({
                  ...song,
                  notation,
                })
              }
            />
          </Box>
        </Box>
      </Box>
      <Box
        grow={0}
        basis="60%"
        padding={5}
        paddingTop={5}
        paddingBottom={8}
        space={8}
        extend={{ overflow: 'auto' }}>
        <Song {...song} key={JSON.stringify(song)} />

        <Box alignSelf="flex-start" space={2} direction="row">
          <Button onClick={() => setSendVisible(true)}>Einreichen</Button>
          <Modal
            visible={sendVisible}
            onClose={() => {
              if (!isLoading) {
                setSendVisible(false)
              }
            }}>
            <Box space={4} padding={2} minWidth={350}>
              <Text intent="category">Deine Daten</Text>
              <TextInput
                value={submitter.name}
                onChange={name => setSubmitter({ ...submitter, name })}
                label="Dein Name"
              />
              <TextInput
                value={submitter.mail}
                onChange={mail => setSubmitter({ ...submitter, mail })}
                label="Deine E-Mail"
              />
              <TextArea
                value={submitter.content}
                onChange={content => setSubmitter({ ...submitter, content })}
                label="Beschreibung (bei Änderung)"
              />
              <Box paddingTop={2} space={2}>
                <Button
                  disabled={isLoading}
                  onClick={async () => {
                    setLoading(true)
                    const res = await onSubmit(song, {
                      submitter: submitter.name,
                      submitterMail: submitter.mail,
                      submitterContent: submitter.content,
                    })

                    if (res.success) {
                      setSendVisible(false)
                      alert(`Erfolgreich!
Danke für die Einsendung.`)
                    } else {
                      alert(res.error)
                    }

                    setLoading(false)
                  }}>
                  {isLoading ? 'Daten werden gesendet...' : 'Einreichen'}
                </Button>
                <Button
                  variant="secondary"
                  disabled={isLoading}
                  onClick={() => {
                    setSendVisible(false)
                  }}>
                  Abbrechen
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  )
}
