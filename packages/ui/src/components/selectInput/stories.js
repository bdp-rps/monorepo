import React from 'react'
import { storiesOf } from '@storybook/react'

import SelectInput from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Forms/SelectInput', module).add('Default', () => {
  function SelectInputWithValue({
    defaultValue = '',
    disabled,
    isValid,
    errorMessage,
    description,
  }) {
    return (
      <SelectInput
        disabled={disabled}
        label="Label"
        name="test"
        onChange={() => {}}
        description={description}
        errorMessage={errorMessage}
        placeholder="e.g., Placeholder"
        value={defaultValue}
        isValid={isValid}>
        <option>A</option>
        <option disabled>B</option>
        <option>C</option>
      </SelectInput>
    )
  }

  return (
    <>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty">
          <SelectInputWithValue />
        </Wrapper>
        <Wrapper name="Filled">
          <SelectInputWithValue defaultValue="A" />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Error">
          <SelectInputWithValue
            isValid={false}
            errorMessage="This is an error."
            description="I'm a helper text."
          />
        </Wrapper>
        <Wrapper name="Filled - Error">
          <SelectInputWithValue
            defaultValue="A"
            isValid={false}
            errorMessage="This is an error."
          />
        </Wrapper>
      </Box>
      <Box spacing={4} direction="row">
        <Wrapper name="Empty - Disabled">
          <SelectInputWithValue disabled description="I'm a helper text." />
        </Wrapper>
        <Wrapper name="Filled - Disabled">
          <SelectInputWithValue defaultValue="A" disabled />
        </Wrapper>
      </Box>
    </>
  )
})
