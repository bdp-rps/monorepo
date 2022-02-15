import React, { useState } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Button,
  useTheme,
  useField,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Page({
  title,
  summary,
  description,
  age,
  size,
  material,
  notes,
  type,
  location,
  duration,
  preparation,
  author,
}) {
  return (
    <>
      <Header />
      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" paddingTop={6} paddingBottom={25} space={2}>
            <Text variant="category">{title}</Text>
            <Text>{summary}</Text>
          </Box>
        </Layout>
      </Box>
      <Footer />
    </>
  )
}

export async function getStaticPaths({ params }) {
  const { promises: fs } = require('fs')
  const { join } = require('path')

  const dataPath = join(process.cwd(), 'data')
  const files = await fs.readdir(dataPath)

  return {
    fallback: false,
    paths: files.map((file) => ({
      params: {
        id: file.replace('.json', ''),
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const { promises: fs } = require('fs')
  const { join } = require('path')

  const dataPath = join(process.cwd(), 'data')
  const content = await fs.readFile(join(dataPath, params.id + '.json'), {
    encoding: 'utf-8',
  })

  const data = JSON.parse(content)

  return {
    props: data,
  }
}
