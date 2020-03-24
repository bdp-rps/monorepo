import React from 'react'

import SongForm from '../../features/liedgut/SongForm'

export default function Page() {
  return <SongForm onSubmit={song => alert(JSON.stringify(song))} />
}
