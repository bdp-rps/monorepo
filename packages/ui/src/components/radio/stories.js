import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Radio from './'
import Box from '../box'

storiesOf('Forms/Radio', module)
  .addWithJSX('Default', () => (
    <Box gap={4} padding={4} maxWidth={350}>
      <Radio name="A" label="Default" />
      <Radio
        label="Checked"
        description="This is checked by default"
        name="A"
        id="A"
        value="A"
      />
      <Radio label="Disabled" disabled={true} />
      <Radio
        label="Disabled + Checked"
        disabled={true}
        id="A"
        name="B"
        value="A"
      />
      <Radio
        label="Error"
        errorMessage="Something went wrong."
        name="B"
        isValid={false}
      />
      <Radio
        label="Error + Checked"
        description="This is checked by default"
        errorMessage="Something went wrong."
        name="C"
        id="A"
        value="A"
        isValid={false}
      />
      <Radio
        label="Error + Disabled + Checked"
        errorMessage="Something went wrong."
        name="D"
        id="A"
        value="A"
        isValid={false}
        disabled={true}
      />
    </Box>
  ))
  .addWithJSX('Controlled', () => {
    const RadioWithValue = () => {
      const [value, setValue] = useState('A')

      return (
        <Box gap={4} padding={4}>
          <Radio label="A" value={value} onChange={setValue} name="A" />
          <Radio label="B" value={value} onChange={setValue} name="B" />
          <Radio label="C" value={value} onChange={setValue} name="C" />
        </Box>
      )
    }

    return <RadioWithValue />
  })
