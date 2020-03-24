import React from 'react'
import { useRouter } from 'next/router'

import SongForm from '../../../features/liedgut/SongForm'
import Header from '../../../components/Header'

export default function Page() {
  const router = useRouter()
  const { songId } = router.query

  if (!songId) {
    return null
  }

  const songData = require('@bdp-rps/liedgut/lib/songs/' + songId).default

  return (
    <>
      <Header />

      <SongForm
        initialSong={songData}
        onSubmit={song => alert(JSON.stringify(song))}
      />
    </>
  )
}

Page.getInitialProps = () => ({})
