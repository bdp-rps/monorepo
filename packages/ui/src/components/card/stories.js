import React from 'react'
import { storiesOf } from '@storybook/react'

import Box from '../box'
import Card from './'

storiesOf('Layout/Card', module).addWithJSX('Default', () => (
  <Box spacing={4} maxWidth={350} padding={4}>
    <Card elevation="minimal">Minimal</Card>
    <Card elevation="low">Low</Card>
    <Card elevation="medium">Medium</Card>
    <Card elevation="high">High</Card>
    <Card elevation="minimal">
      <Card elevation="low">
        <Card elevation="medium">
          <Card elevation="high">Pyramid</Card>
        </Card>
      </Card>
    </Card>
  </Box>
))
