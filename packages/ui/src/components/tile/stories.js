import React from 'react'
import { storiesOf } from '@storybook/react'

import Tile from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'

storiesOf('Molecules/Tile', module).addWithJSX('Default', () => (
  <Box spacing={1} maxWidth={350}>
    <Wrapper name="Text only">
      <Tile>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Tile>
    </Wrapper>
    <Wrapper name="Titled">
      <Tile title="Hello there">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Tile>
    </Wrapper>
    <Wrapper name="Image">
      <Tile image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Tile>
    </Wrapper>
    <Wrapper name="Image + Title">
      <Tile
        image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg"
        title="Hello there">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Tile>
    </Wrapper>
  </Box>
))
