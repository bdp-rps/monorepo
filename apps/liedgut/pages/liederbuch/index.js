import React, { useState, useEffect } from 'react'
import { Box, Text, Spacer, Checkbox, Button, useTheme } from '@bdp-rps/ui'
import { PDFViewer, Document, Font } from '@bdp-rps/react-pdf-renderer'
import { Song, songs } from '@bdp-rps/liedgut'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'

import normalizeContent from '../../utils/normalizeContent'

const songData = songs.reduce((songData, name) => {
  const song = require('@bdp-rps/liedgut/src/songs/' + name + '.json')
  songData[name] = {
    ...song,
    sort: normalizeContent(song.content),
  }

  return songData
}, {})

export default function Page() {
  const [selected, setSelected] = useState([])
  const [step, setStep] = useState(0)
  const theme = useTheme()

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
  }, [])

  return (
    <>
      <Header />

      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" paddingTop={5} paddingBottom={30}>
            {step !== 0 ? null : (
              <>
                <Text variant="category">Liedauswahl</Text>
                <Spacer size={1} />
                <Text>Wähle Lieder für dein Liederbuch aus.</Text>
                <Spacer size={4} />
                <Box space={4}>
                  {Object.keys(songData).map((name) => (
                    <Checkbox
                      label={songData[name].title}
                      name={name}
                      value={selected.indexOf(name) !== -1}
                      onChange={(change) => {
                        if (selected.indexOf(name) !== -1) {
                          setSelected(selected.filter((s) => s !== name))
                        } else {
                          setSelected([...selected, name])
                        }
                      }}
                    />
                  ))}
                </Box>
                {selected.length === 0 ? null : (
                  <Box
                    alignSelf="center"
                    paddingTop={4}
                    paddingBottom={4}
                    paddingLeft={8}
                    paddingRight={4}
                    direction="row"
                    alignItems="center"
                    space={4}
                    extend={{
                      backgroundColor: 'rgba(39, 82, 163, 0.8)',
                      whiteSpace: 'nowrap',

                      position: 'fixed',
                      bottom: 8,
                    }}>
                    <Text variant="label" color="white">
                      <strong>{selected.length}</strong> ausgewählt.
                    </Text>
                    <Button onClick={() => setStep(1)}>Weiter</Button>
                  </Box>
                )}
              </>
            )}
            {step !== 1 ? null : (
              <>
                <PDFViewer style={{ minHeight: '90vh' }}>
                  <Document>
                    {selected
                      .sort((a, b) =>
                        songData[a].sort > songData[b].sort ? 1 : -1
                      )
                      .map((key) => (
                        <Song key={key} {...songData[key]} />
                      ))}
                  </Document>
                </PDFViewer>
              </>
            )}
          </Box>
        </Layout>
      </Box>
      <Footer />
    </>
  )
}
