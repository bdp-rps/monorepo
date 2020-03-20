import React from 'react'
import { storiesOf } from '@storybook/react'

import Box from './'

import Wrapper from '../../../stories/Wrapper'

const Block = () => (
  <Box width={100} height={100} extend={{ backgroundColor: 'grey' }} />
)

storiesOf('Layout/Box', module).addWithJSX('Default', () => (
  <Box spacing={4}>
    <Wrapper name="direction=column">
      <Box spacing={1}>
        <Block />
        <Block />
      </Box>
    </Wrapper>
    <Wrapper name="direction=row">
      <Box direction={['column', , 'row']} spacing={1}>
        <Block />
        <Block />
      </Box>
    </Wrapper>
    <Wrapper name="Responsive direction">
      <Box direction={['column', , 'row']} spacing={1}>
        <Block />
        <Block />
      </Box>
    </Wrapper>
    <Box>
      <Wrapper name="Spacing: 2">
        <Box spacing={2} direction="row">
          <Block />
          <Block />
        </Box>
      </Wrapper>
      <Wrapper name="Spacing: 4">
        <Box spacing={4} direction="row">
          <Block />
          <Block />
        </Box>
      </Wrapper>
      <Wrapper name="Spacing: 8">
        <Box spacing={8} direction="row">
          <Block />
          <Block />
        </Box>
      </Wrapper>
    </Box>
  </Box>
))
