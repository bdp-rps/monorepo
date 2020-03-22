import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './'
import Box from '../box'
import Text from '../text'

storiesOf('Layout/Card', module).addWithJSX('Default', () => (
  <Box gap={4} maxWidth={350} padding={4}>
    <Card extend={{ textAlign: 'center' }} elevation="minimal">
      <Text>Minimal</Text>
    </Card>
    <Card extend={{ textAlign: 'center' }} elevation="low">
      <Text>Low</Text>
    </Card>
    <Card extend={{ textAlign: 'center' }} elevation="medium">
      <Text>Medium</Text>
    </Card>
    <Card extend={{ textAlign: 'center' }} elevation="high">
      <Text>High</Text>
    </Card>
    <Card elevation="minimal">
      <Card elevation="low">
        <Card elevation="medium">
          <Card extend={{ textAlign: 'center' }} elevation="high">
            <Text>Pyramid</Text>
          </Card>
        </Card>
      </Card>
    </Card>
  </Box>
))
