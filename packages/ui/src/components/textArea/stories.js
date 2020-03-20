import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Forms/TextArea', module).add('Default', () => {
  function TextAreaWithValue({
    defaultValue = '',
    disabled,
    isValid,
    errorMessage,
    description,
  }) {
    return (
      <TextArea
        disabled={disabled}
        label="Label"
        name="test"
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
          <TextAreaWithValue />
        </Wrapper>
        <Wrapper name="Filled">
          <TextAreaWithValue defaultValue="Entry" />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Error">
          <TextAreaWithValue
            isValid={false}
            errorMessage="This is an error."
            description="I'm a helper text."
          />
        </Wrapper>
        <Wrapper name="Filled - Error">
          <TextAreaWithValue
            defaultValue="Entry"
            isValid={false}
            errorMessage="This is an error."
          />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Disabled">
          <TextAreaWithValue disabled description="I'm a helper text." />
        </Wrapper>
        <Wrapper name="Filled - Disabled">
          <TextAreaWithValue defaultValue="Entry" disabled />
        </Wrapper>
      </Box>
    </>
  )
})
