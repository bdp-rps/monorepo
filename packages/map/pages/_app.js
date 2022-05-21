import Head from 'next/head'
import * as React from 'react'
import AppWrapper from '../components/AppWrapper'
import './map.css'

export default function App({ Component, pageProps, renderer }) {
  return (
    <AppWrapper renderer={renderer}>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
