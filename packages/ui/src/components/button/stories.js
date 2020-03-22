import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Actions/Button', module).addWithJSX('Default', () => (
  <Box gap={4}>
    <Box gap={4} maxWidth={350} direction="row">
      <Wrapper name="variant=primary">
        <Button onClick={() => console.log('Clicked')}>Click Here</Button>
      </Wrapper>
      <Wrapper name="variant=secondary">
        <Button variant="secondary" onClick={() => console.log('Clicked')}>
          Click Here
        </Button>
      </Wrapper>
    </Box>
  </Box>
))
