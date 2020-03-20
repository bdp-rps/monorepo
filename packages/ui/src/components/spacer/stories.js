import React from 'react'
import { storiesOf } from '@storybook/react'

import Spacer from './'
import Box from '../box'

const Block = () => (
  <Box width={100} height={100} extend={{ backgroundColor: 'grey' }} />
)

storiesOf('Layout/Spacer', module).addWithJSX('Default', () => (
  <Box padding={4}>
    <Block />
    <Spacer />
    <Block />
    <Spacer size={2} />
    <Block />
    <Spacer size={4} />
    <Block />
    <Spacer size={8} />
    <Block />
    <Spacer size={16} />
    <Block />
  </Box>
))
