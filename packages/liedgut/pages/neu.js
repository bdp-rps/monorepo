import React from 'react'

import SongForm from '../features/SongForm'
import Header from '../components/Header'

import addSong from '../api/addSong'

export default function Page() {
  return (
    <>
      <Header />
      <SongForm
        onSubmit={async (song, meta) =>
          await addSong(song, { ...meta, change: false })
        }
      />
    </>
  )
}
