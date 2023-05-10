import fetch from 'node-fetch'
import React from 'react'

import SongForm from '../features/SongForm'
import Header from '../components/Header'

export default function Page() {
  return (
    <>
      <Header />
      <SongForm
        onSubmit={async (song, meta) =>
          await fetch('/api/add-song', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              ...meta,
              change: false,
              song,
            }),
          })
        }
      />
    </>
  )
}
