import React from 'react'

import SongForm from '../../features/liedgut/SongForm'
import Header from '../../components/Header'

export default () => (
  <>
    <Header />
    <SongForm onSubmit={song => alert(JSON.stringify(song))} />
  </>
)
