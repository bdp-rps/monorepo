import React from 'react'
import { storiesOf } from '@storybook/react'

import TextInput from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Forms/TextInput', module).add('Default', () => {
  function TextInputWithValue({
    defaultValue = '',
    disabled,
    isValid,
    errorMessage,
    description,
  }) {
    return (
      <TextInput
        disabled={disabled}
        label="Label"
        name={defaultValue + isValid + errorMessage + description}
        onChange={() => {}}
        description={description}
        errorMessage={errorMessage}
        placeholder="e.g., Placeholder"
        value={defaultValue}
        isValid={isValid}
      />
    )
  }

  return (
    <>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty">
          <TextInputWithValue />
        </Wrapper>
        <Wrapper name="Filled">
          <TextInputWithValue defaultValue="Entry" />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Error">
          <TextInputWithValue
            isValid={false}
            errorMessage="This is an error."
            description="I'm a helper text."
          />
        </Wrapper>
        <Wrapper name="Filled - Error">
          <TextInputWithValue
            defaultValue="Entry"
            isValid={false}
            errorMessage="This is an error."
          />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Disabled">
          <TextInputWithValue disabled description="I'm a helper text." />
        </Wrapper>
        <Wrapper name="Filled - Disabled">
          <TextInputWithValue defaultValue="Entry" disabled />
        </Wrapper>
      </Box>
    </>
  )
})
