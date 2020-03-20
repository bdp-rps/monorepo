import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tile, Box, TextInput, TextArea, Text } from '../src'
import Wrapper from './Wrapper'

storiesOf('Debug/All Components', module).addWithJSX('Default', () => {
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
    <Box spacing={1} padding={3} maxWidth={400}>
      <Wrapper name="Typography">
        <Text intent="title">Title</Text>
        <Text intent="subtitle">Subtitle</Text>
        <Text intent="category">Category</Text>
        <Text intent="body">Body Text</Text>
        <Text>Default Text</Text>
        <Text intent="label">Label Text</Text>
        <Text intent="note">Note Text</Text>
        <Text intent="note" variant="info">
          Note Text
        </Text>
      </Wrapper>
      <Wrapper name="TextInput">
        <Box spacing={6}>
          <Box spacing={3} direction="row">
            <TextInputWithValue label="Label" description="Some description" />
            <TextInputWithValue
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
            <TextInputWithValue
              disabled={true}
              label="Label"
              description="Some description"
            />
            <TextInputWithValue
              disabled={true}
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
          </Box>
          <Box spacing={3} direction="row">
            <TextInputWithValue
              defaultValue="Entry"
              label="Label"
              description="Some description"
            />
            <TextInputWithValue
              defaultValue="Entry"
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
            <TextInputWithValue
              disabled={true}
              defaultValue="Entry"
              label="Label"
              description="Some description"
            />
            <TextInputWithValue
              disabled={true}
              defaultValue="Entry"
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
          </Box>
        </Box>
      </Wrapper>
      <Wrapper name="TextArea">
        <Box spacing={6}>
          <Box spacing={3} direction="row">
            <TextAreaWithValue label="Label" description="Some description" />
            <TextAreaWithValue
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
            <TextAreaWithValue
              disabled={true}
              label="Label"
              description="Some description"
            />
            <TextAreaWithValue
              disabled={true}
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
          </Box>
          <Box spacing={3} direction="row">
            <TextAreaWithValue
              defaultValue="Entry"
              label="Label"
              description="Some description"
            />
            <TextAreaWithValue
              defaultValue="Entry"
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
            <TextAreaWithValue
              disabled={true}
              defaultValue="Entry"
              label="Label"
              description="Some description"
            />
            <TextAreaWithValue
              disabled={true}
              defaultValue="Entry"
              label="Label"
              isValid={false}
              errorMessage="Some error"
              description="Some description"
            />
          </Box>
        </Box>
      </Wrapper>

      <Wrapper name="Tile">
        <Box spacing={3} direction="row">
          <Tile>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Tile>
          <Tile title="Hello there">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Tile>
          <Tile image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Tile>
          <Tile
            image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg"
            title="Hello there">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Tile>
        </Box>
      </Wrapper>
    </Box>
  )
})
