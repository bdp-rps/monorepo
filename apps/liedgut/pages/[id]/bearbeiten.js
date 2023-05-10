import fetch from 'node-fetch'
import React from 'react'

import { songs as songList } from '@bdp-rps/liedgut'

import SongForm from '../../features/SongForm'
import Header from '../../components/Header'

export default function Page({ id, songData }) {
  return (
    <>
      <Header id={id} title={songData?.title} />

      <SongForm
        initialSong={songData}
        onSubmit={async (song, meta) =>
          await fetch('/api/add-song', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              ...meta,
              change: true,
              song,
            }),
          })
        }
      />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: songList.map((id) => ({
      params: {
        id,
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const songs = require('@bdp-rps/liedgut/lib/songs').default
  const songData = songs[params.id]

  return {
    props: {
      songData,
      id: params.id,
    },
  }
}
