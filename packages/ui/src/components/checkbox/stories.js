import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from './'
import Box from '../box'

storiesOf('Forms/Checkbox', module).addWithJSX('Default', () => (
  <Box gap={4} padding={4} maxWidth={350}>
    <Checkbox label="Default" />
    <Checkbox
      label="Checked"
      description="This is checked by default"
      value={true}
    />
    <Checkbox label="Disabled" disabled={true} />
    <Checkbox label="Disabled + Checked" disabled={true} value={true} />
    <Checkbox
      label="Error"
      errorMessage="Something went wrong."
      isValid={false}
    />
    <Checkbox
      label="Error + Checked"
      description="This is checked by default"
      errorMessage="Something went wrong."
      isValid={false}
      value={true}
    />
    <Checkbox
      label="Error + Disabled + Checked"
      errorMessage="Something went wrong."
      isValid={false}
      disabled={true}
      value={true}
    />
  </Box>
))
