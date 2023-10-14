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

import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import Template from '../components/Template'

function ModuleListItem({ name, title, summary }) {
  return (
    <ListItem key={name} href={'/' + name}>
      <Box>
        <Text color="blue">{title}</Text>
        <Text>{summary}</Text>
      </Box>
    </ListItem>
  )
}

function ModuleList({ modules }) {
  const theme = useTheme()

  return (
    <Box minHeight="95vh" paddingTop={4} paddingBottom={15} space={2}>
      <Box>
        {Object.keys(modules).map((name) => {
          const data = modules[name]
          return <ModuleListItem key={name} {...data} name={name} />
        })}
      </Box>
    </Box>
  )
}

export default function Page({ modules }) {
  return (
    <Template>
      <ModuleList modules={modules} />
    </Template>
  )
}

export async function getStaticProps({ params }) {
  const { promises: fs } = require('fs')
  const { join } = require('path')

  const dataPath = join(process.cwd(), 'data')

  const modules = {}
  const files = await fs.readdir(dataPath)

  for (const file of files) {
    const data = await fs.readFile(join(dataPath, file), { encoding: 'utf-8' })
    modules[file.replace('.json', '')] = JSON.parse(data)
  }

  return {
    props: {
      modules,
    },
  }
}
