import React from 'react'

import { songs as songList } from '@bdp-rps/liedgut'

import SongForm from '../../features/SongForm'
import Header from '../../components/Header'

import addSong from '../../api/addSong'

export default function Page({ id, songData }) {
  return (
    <>
      <Header id={id} title={songData.title} />

      <SongForm
        initialSong={songData}
        onSubmit={async (song, meta) =>
          await addSong(song, { ...meta, change: true })
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
  const songData = require('@bdp-rps/liedgut/lib/songs/' + params.id + '.json')

  return {
    props: {
      songData,
      id: params.id,
    },
  }
}
