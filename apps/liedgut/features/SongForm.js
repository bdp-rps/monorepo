import React, {
  useRef,
  useState,
  createContext,
  useEffect,
  useContext,
} from 'react'
import {
  Box,
  Button,
  TextArea,
  TextInput,
  SelectInput,
  Modal,
  Loading,
  Checkbox,
  Link,
  Text,
  useTheme,
  useField,
} from '@bdp-rps/ui'
import { PDFViewer, Font, Document } from '@bdp-rps/react-pdf-renderer'
import {
  renderAuthors,
  Song as PDFSong,
  songs as songList,
} from '@bdp-rps/liedgut'

import Song from '../components/Song'
import ListItem from '../components/ListItem'

import normalizeChord from '../utils/normalizeChord'
import { useRouter } from 'next/router'

const defaultSong = {
  notation: '',
  content: '',
  title: '',
  words: [],
  tune: [],
  translation: [],
  beat: '4/4',
  alternativeTitle: '',
  tempo: 60,
  musicalKey: '',
  info: '',
  specialSettings: {},
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
  critical: false,
}

const defaultSubmitter = {
  name: '',
  mail: '',
  content: '',
}

const CACHE_ID = 'bdp-rps-liedgut-song'

function debounce(func, duration) {
  let timeout

  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}

export default function SongForm({ initialSong = defaultSong, onSubmit }) {
  const router = useRouter()
  const [isMounted, setMounted] = useState(false)

  const textAreaRef = useRef()
  const [song, setSong] = useState(() => ({
    ...initialSong,
    specialSettings: JSON.stringify(initialSong.specialSettings, null, 2),
  }))
  const [author, setAuthor] = useState(defaultAuthor)
  const [submitter, setSubmitter] = useState(defaultSubmitter)
  const [tab, setTab] = useState('details')
  const [authorVisible, setAuthorVisible] = useState(false)
  const [wordsAndTune, setWordsAndTune] = useState(false)
  const [authorMode, setAuthorMode] = useState()
  const [sendVisible, setSendVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [cache, setCache] = useState()
  const [reuseCacheVisible, setReuseCacheVisible] = useState(false)
  const [isPreviewVisible, setPreviewVisible] = useState(false)
  const [previewRefresh, setPreviewRefresh] = useState(Date.now())

  useEffect(() => {
    Font.register({
      family: 'Bell Gothic',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic.ttf',
    })

    Font.register({
      family: 'Bell Gothic Bold',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic_Bold.ttf',
      fontWeight: 'bold',
    })

    setMounted(true)
  }, [])

  useEffect(() => {
    if (localStorage.hasOwnProperty(CACHE_ID)) {
      setCache(localStorage.getItem(CACHE_ID))
    }
  }, [])

  useEffect(() => {
    if (song !== initialSong || author !== defaultAuthor) {
      localStorage.setItem(CACHE_ID, JSON.stringify({ song, author }))
    }
  }, [song, author])

  let specialSettings = {}
  try {
    specialSettings = JSON.parse(song.specialSettings)
  } catch (e) {}

  return (
    <Box
      direction={['column', , , 'row']}
      grow={1}
      alignSelf="stretch"
      height="calc(100vh - 50px)">
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
          <TabNavItem active={tab === 'settings'} id="settings">
            Settings
          </TabNavItem>
        </TabNav>
        <Box
          grow={1}
          height="100%"
          shrink={1}
          extend={{ backgroundColor: 'rgb(245, 245, 245)', overflow: 'auto' }}>
          <Box
            grow={1}
            space={4}
            padding={5}
            display={tab === 'details' ? 'flex' : 'none'}>
            <TextInput
              label="Titel"
              value={song.title}
              onChange={(e) => setSong({ ...song, title: e.target.value })}
            />
            <TextInput
              type="number"
              label="Tempo"
              value={song.tempo}
              onChange={(e) => setSong({ ...song, tempo: e.target.value })}
            />
            <SelectInput
              label="Takt"
              value={song.beat}
              onChange={(e) => setSong({ ...song, beat: e.target.value })}>
              <option value="1/4">1/4</option>
              <option value="2/4">2/4</option>
              <option value="3/4">3/4</option>
              <option value="4/4">4/4</option>
              <option value="5/4">5/4</option>
              <option value="3/8">3/8</option>
              <option value="6/8">6/8</option>
              <option value="7/8">7/8</option>
            </SelectInput>

            <SelectInput
              label="Tonart"
              value={song.musicalKey}
              onChange={(e) =>
                setSong({ ...song, musicalKey: e.target.value })
              }>
              <option value="C">C</option>
              <option value="Cm">c</option>
              <option value="C#">Cis</option>
              <option value="C#m">cis</option>
              <option value="Db">Des</option>
              <option value="Dbm">des</option>
              <option value="D">D</option>
              <option value="Dm">d</option>
              <option value="Eb">Es</option>
              <option value="Ebm">es</option>
              <option value="E">E</option>
              <option value="Em">e</option>
              <option value="F">F</option>
              <option value="Fm">f</option>
              <option value="F#">Fis</option>
              <option value="F#m">fis</option>
              <option value="Gb">Ges</option>
              <option value="Gbm">ges</option>
              <option value="G">G</option>
              <option value="Gm">g</option>
              <option value="Ab">As</option>
              <option value="Abm">as</option>
              <option value="A">A</option>
              <option value="Am">a</option>
              <option value="Bb">B</option>
              <option value="Bbm">b</option>
              <option value="B">H</option>
              <option value="Bm">h</option>
              <option value="Cb">Ces</option>
              <option value="Cbm">ces</option>
            </SelectInput>

            <TextArea
              label="Alternativer Titel"
              description="Für die Suche und Inhaltsverzeichnisse; ein Titel pro Zeile."
              value={song.alternativeTitle}
              onChange={(e) =>
                setSong({ ...song, alternativeTitle: e.target.value })
              }
            />
            <TextArea
              label="Zusatz-Information"
              description="z.B. Worterklärung, Ergänzungen oder Widmungen"
              value={song.info}
              onChange={(e) => setSong({ ...song, info: e.target.value })}
            />

            <Box space={10} paddingTop={5}>
              <Box space={1}>
                <Text variant="label">Worte</Text>

                <Box>
                  {song.words.map((author) => (
                    <ListItem>
                      <Box direction="row" space={2} alignItems="center">
                        <Box grow={1}>
                          <Text>{renderAuthors([author])}</Text>
                        </Box>

                        <Box justifyContent="flex-end">
                          <Button
                            variant="secondary"
                            size="tiny"
                            intent="negative"
                            onClick={() =>
                              setSong({
                                ...song,
                                words: song.words.filter((a) => author !== a),
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
                    size="small"
                    onClick={() => {
                      setAuthorMode('words')
                      setAuthorVisible(true)
                    }}>
                    Hinzufügen
                  </Button>
                </Box>
              </Box>

              <Box space={1}>
                <Text variant="label">Weise</Text>

                <Box>
                  {song.tune.map((author) => (
                    <ListItem>
                      <Box direction="row" space={2} alignItems="center">
                        <Box grow={1}>
                          <Text>{renderAuthors([author])}</Text>
                        </Box>

                        <Box direction="row" alignSelf="flex-end" space={2}>
                          <Button
                            variant="secondary"
                            size="tiny"
                            intent="negative"
                            onClick={() =>
                              setSong({
                                ...song,
                                tune: song.tune.filter((a) => author !== a),
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
                    size="small"
                    onClick={() => {
                      setAuthorMode('tune')
                      setAuthorVisible(true)
                    }}>
                    Hinzufügen
                  </Button>
                </Box>
              </Box>
            </Box>
            <Modal
              visible={authorVisible}
              onClose={() => setAuthorVisible(false)}>
              <Box space={4} padding={2} minWidth={350}>
                <Text variant="category">Autor hinzufügen</Text>
                <TextInput
                  value={author.name}
                  onChange={(e) =>
                    setAuthor({ ...author, name: e.target.value })
                  }
                  label="Name"
                />
                <TextInput
                  value={author.nickname}
                  onChange={(e) =>
                    setAuthor({ ...author, nickname: e.target.value })
                  }
                  label="Fahrtenname"
                />
                <TextInput
                  value={author.group}
                  onChange={(e) =>
                    setAuthor({ ...author, group: e.target.value })
                  }
                  label="Gruppe"
                />
                <TextInput
                  value={author.organisation}
                  onChange={(e) =>
                    setAuthor({ ...author, organisation: e.target.value })
                  }
                  label="Organisation"
                />
                <TextInput
                  value={author.year}
                  onChange={(e) =>
                    setAuthor({ ...author, year: e.target.value })
                  }
                  label="Jahr"
                />
                <Checkbox
                  name="critical"
                  label="Kritischer Autor"
                  value={author.critical}
                  onChange={(e) =>
                    setAuthor({ ...author, critical: e.target.checked })
                  }
                />
                <Checkbox
                  name="words-and-tune"
                  label="Weise & Worte"
                  value={wordsAndTune}
                  onChange={(e) => setWordsAndTune(e.target.checked)}
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
                    intent="negative"
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
              description="Akkorde können im Text in Klammern markiert werden. z.B. Ein {e}Akk{D7}ord."
              value={song.content}
              onChange={(e) =>
                setSong({
                  ...song,
                  content: e.target.value,
                })
              }
            />
          </Box>
          <Box
            grow={1}
            space={0}
            padding={5}
            display={tab === 'melody' ? 'flex' : 'none'}>
            <Text>
              T:{song.title}
              <br />
              C:{renderAuthors(song.tune)}
              <br />
              M:{song.beat}
              <br />
              Q:1/4={song.tempo}
              <br />
              K:{song.musicalKey}
            </Text>
            <TextArea
              extend={{ minHeight: 400, flexGrow: 1 }}
              ref={textAreaRef}
              name="melody"
              description={
                <>
                  Die Melodie wird im ABC-Format notiert. z.B. "C2DE2F Bc|A4B4"
                  <br />
                  <Link
                    href="http://kurs.schacherl.info/ABC-Musiknotation/abc_syntax/abc_syntax.html"
                    target="_blank"
                    rel="noopener">
                    ABC Syntax Kurs
                  </Link>
                </>
              }
              value={song.notation}
              onChange={(e) =>
                setSong({
                  ...song,
                  notation: e.target.value,
                })
              }
            />
          </Box>
          <Box
            grow={1}
            space={3}
            padding={5}
            display={tab === 'settings' ? 'flex' : 'none'}>
            <Button
              size="small"
              onClick={() => {
                // Create a new link
                const data = JSON.stringify({ ...song, specialSettings })
                const blob = new Blob([data], { type: 'application/json' })
                const url = URL.createObjectURL(blob)

                const anchor = document.createElement('a')
                anchor.href = url
                anchor.download = router.query.id + '.json'

                // Append to the DOM
                document.body.appendChild(anchor)

                // Trigger `click` event
                anchor.click()

                // Remove element from DOM
                document.body.removeChild(anchor)
              }}>
              Raw Download
            </Button>
            <TextArea
              extend={{ minHeight: 400, flexGrow: 1 }}
              name="settings"
              description="Spezielle Settings für die Liederbücher. Bitte nur anfassen, wer Ahnung hat!"
              value={song.specialSettings}
              onChange={(e) =>
                setSong({
                  ...song,
                  specialSettings: e.target.value,
                })
              }
            />
          </Box>
        </Box>

        <Box
          padding={2}
          space={2}
          grow={1}
          justifyContent="space-between"
          direction={['column', , 'row']}>
          <Button
            intent="positive"
            variant="secondary"
            disabled={cache === undefined}
            onClick={() => {
              if (localStorage.getItem(CACHE_ID) !== cache) {
                setReuseCacheVisible(true)
              } else {
                const { song, author } = JSON.parse(cache)
                setSong(song)
                setAuthor(author)
              }
            }}>
            Letzte Sitzung wiederherstellen
          </Button>
          <Button onClick={() => setSendVisible(true)}>Einreichen</Button>
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
        <Song {...song} textAreaRef={textAreaRef} />
        <Box space={4}>
          <Checkbox
            label="PDF Vorschau anzeigen"
            value={isPreviewVisible}
            onChange={() => setPreviewVisible(!isPreviewVisible)}
          />
          {isMounted && isPreviewVisible && (
            <Box space={3}>
              <Box alignSelf="flex-start">
                <Button onClick={() => setPreviewRefresh(Date.now())}>
                  Neu generieren
                </Button>
              </Box>
              <Box height={500}>
                <PDFViewer key={previewRefresh} width="100%" height="100%">
                  <Document>
                    <PDFSong {...song} specialSettings={specialSettings} />
                  </Document>
                </PDFViewer>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Modal
        visible={reuseCacheVisible}
        onClose={() => setReuseCacheVisible(false)}>
        <Box space={4} padding={2} minWidth={350}>
          <Text variant="category">Letzte Sitzung wiederherstellen</Text>
          <Text>
            Willst du wirklich die letzte Sitzung wiederherstellen?
            <br />
            Alle aktuellen Änderungen gehen verloren.
          </Text>

          <Box paddingTop={2} space={2} direction={['column', , 'row']}>
            <Button
              onClick={() => {
                const { song, author } = JSON.parse(cache)
                setReuseCacheVisible(false)
                setSong(song)
                setAuthor(author)
              }}>
              Wiederherstellen
            </Button>
            <Button
              variant="secondary"
              intent="negative"
              onClick={() => {
                setReuseCacheVisible(false)
              }}>
              Abbrechen
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        visible={sendVisible}
        onClose={() => {
          if (!isLoading) {
            setSendVisible(false)
          }
        }}>
        <Box space={4} padding={2} minWidth={350}>
          <Text variant="category">Deine Daten</Text>
          <TextInput
            value={submitter.name}
            onChange={(e) =>
              setSubmitter({ ...submitter, name: e.target.value })
            }
            label="Dein Name"
          />
          <TextInput
            value={submitter.mail}
            onChange={(e) =>
              setSubmitter({ ...submitter, mail: e.target.value })
            }
            label="Deine E-Mail"
          />
          <TextArea
            value={submitter.content}
            onChange={(e) =>
              setSubmitter({ ...submitter, content: e.target.value })
            }
            label="Beschreibung (bei Änderung)"
          />
          <Box paddingTop={2} space={2}>
            <Button
              disabled={isLoading}
              onClick={async () => {
                setLoading(true)

                let specialSettings = {}
                try {
                  specialSettings = JSON.parse(song.specialSettings)
                } catch (e) {}

                const res = await onSubmit(
                  { ...song, specialSettings },
                  {
                    submitter: submitter.name,
                    submitterMail: submitter.mail,
                    submitterContent: submitter.content,
                  }
                )

                const json = await res.json()

                if (json.status === 'done') {
                  setSendVisible(false)
                  alert(`Erfolgreich!
Danke für die Einsendung.`)
                } else {
                  alert(json.error)
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
  )
}
