import React, { useState, createContext, useContext } from 'react'
import {
  Box,
  Button,
  TextArea,
  TextInput,
  SelectInput,
  useTheme,
} from '@bdp-rps/ui'

import Song from '../../components/Song'

const defaultSong = {
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
      justifyContent="center"
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
      paddingTop={3}
      paddingBottom={2.5}
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
          ':first-child': {
            marginLeft: 0,
          },
          ':last-child': {
            marginRight: 0,
          },
        },
      ]}
      onClick={() => {
        if (!disabled) {
          onChange(id)
        }
      }}>
      <Text intent="category">{children}</Text>
    </Box>
  )
}

export default function SongForm({ initialSong = defaultSong, onSubmit }) {
  const [song, setSong] = useState(initialSong)

  return (
    <Box direction="row" grow={1} height="100%">
      <Box gap={5} padding={5} grow={1} basis="50%" height="100%">
        <TabNav onChange={id => alert(id)}>
          <TabNavItem id="foo">Foo</TabNavItem>
          <TabNavItem id="bar">Bar</TabNavItem>
        </TabNav>
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
          description="z.B. Worterklärung, Ergänzungen ode Widmungen"
          value={song.info}
          onChange={info => setSong({ ...song, info })}
        />
        <TextArea
          extend={{ flexGrow: 1 }}
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
        basis="50%"
        padding={5}
        paddingTop={8}
        paddingBottom={8}
        gap={8}
        extend={{ overflow: 'auto' }}>
        <Song {...song} />
        <Box alignSelf="flex-start">
          <Button onClick={() => onSubmit(song)}>Exportieren</Button>
        </Box>
      </Box>
    </Box>
  )
}
