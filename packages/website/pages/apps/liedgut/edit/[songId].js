import React from 'react'
import { useRouter } from 'next/router'

import SongForm from '../../../../features/liedgut/SongForm'
import Header from '../../../../components/Header'

import addSong from '../../../../api/addSong'

export default function Page() {
  const router = useRouter()
  const { songId } = router.query

  if (!songId) {
    return null
  }

  const songData = require('@bdp-rps/liedgut/lib/songs/' + songId + '.json')

  return (
    <>
      <Header />

      <SongForm
        initialSong={songData}
        onSubmit={async (song, meta) =>
          await addSong(song, { ...meta, change: true })
        }
      />
    </>
  )
}
