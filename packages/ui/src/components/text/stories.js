import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Text from './'
import BaselineGrid from './BaselineGrid'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Core/Typography', module).addWithJSX('Default', () => (
  <>
    <BaselineGrid />
    <Text intent="title">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="subtitle">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="category">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="body">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text>A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="label">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="note">A Quick Brown Fox Jumps Over The Lazy Dog</Text>
    <Text intent="note" variant="info">
      A Quick Brown Fox Jumps Over The Lazy Dog
    </Text>
  </>
))
