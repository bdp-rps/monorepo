import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Tile,
  Box,
  TextInput,
  TextArea,
  Text,
  Button,
  Card,
  Checkbox,
  Radio,
} from '../src'
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
    <Box gap={1} padding={3} maxWidth={500}>
      <Wrapper name="Typography">
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
      </Wrapper>
      <Wrapper name="Card">
        <Box gap={2} direction="row">
          <Card extend={{ textAlign: 'center' }} elevation="minimal">
            <Text>Minimal</Text>
          </Card>
          <Card extend={{ textAlign: 'center' }} elevation="low">
            <Text>Low</Text>
          </Card>
          <Card extend={{ textAlign: 'center' }} elevation="medium">
            <Text>Medium</Text>
          </Card>
          <Card extend={{ textAlign: 'center' }} elevation="high">
            <Text>High</Text>
          </Card>
          <Card elevation="minimal">
            <Card elevation="low">
              <Card elevation="medium">
                <Card extend={{ textAlign: 'center' }} elevation="high">
                  <Text>Pyramid</Text>
                </Card>
              </Card>
            </Card>
          </Card>
        </Box>
      </Wrapper>

      <Wrapper name="Button">
        <Box gap={3} direction="row">
          <Button onClick={() => console.log('Clicked')}>Click Here</Button>
          <Button variant="secondary" onClick={() => console.log('Clicked')}>
            Click Here
          </Button>
        </Box>
      </Wrapper>

      <Wrapper name="TextInput">
        <Box gap={6}>
          <Box gap={3} direction="row">
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
          <Box gap={3} direction="row">
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
        <Box gap={6}>
          <Box gap={3} direction="row">
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
          <Box gap={3} direction="row">
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

      <Wrapper name="Checkbox">
        <Box gap={6}>
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
      </Wrapper>

      <Wrapper name="Radio">
        <Box gap={6}>
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
      </Wrapper>

      <Wrapper name="Tile">
        <Box gap={3}>
          <Box direction="row" gap={3}>
            <Box maxWidth={300}>
              <Tile>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Tile>
            </Box>
            <Box maxWidth={300}>
              <Tile title="Hello there">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Tile>
            </Box>
          </Box>
          <Box direction="row" gap={3}>
            <Box maxWidth={300}>
              <Tile image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Tile>
            </Box>
            <Box maxWidth={300}>
              <Tile
                image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg"
                title="Hello there">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Tile>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
})
