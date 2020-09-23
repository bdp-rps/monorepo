import React from 'react'
import { Button } from '@bdp-rps/ui'

import SongForm from '../features/SongForm'
import Header from '../components/Header'

import addSong from '../api/addSong'

export default () => (
  <>
    <Header />
    <SongForm
      onSubmit={async (song, meta) =>
        await addSong(song, { ...meta, change: false })
      }
    />
  </>
)
