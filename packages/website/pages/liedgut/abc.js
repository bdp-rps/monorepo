import React, { useState, useEffect } from 'react'

const defaultNotation = 'CDEF GABc|'

const Page = () => {
  const [notation, setNotation] = useState(defaultNotation)
  const [midi, setMidi] = useState({})
  const [didMount, setDidMount] = useState(false)

  useEffect(() => setDidMount(true), [])
  useEffect(() => {
    if (didMount) {
      const { Midi } = require('react-abc')
      setMidi({ ...midi, [notation]: <Midi notation={notation} /> })
    }
  }, [notation, didMount])

  if (!didMount) {
    return null
  }

  const { Editor, Midi } = require('react-abc')

  return (
    <div>
      <textarea
        value={notation}
        onChange={e => setNotation(e.target.value)}
        id="abc-test"
      />
      <Editor editArea="abc-test" />
      {midi[notation]}
    </div>
  )
}

export default () => <Page />
