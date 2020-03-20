import React from 'react'
import { storiesOf } from '@storybook/react'

import Grid from './'
import Col from '../col'
import Row from '../row'

import DebugGrid from './DebugGrid'

const Column = ({ children, size }) => (
  <Col size={size}>
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 7,
        textAlign: 'center',
        padding: 10,
        border: '1px solid grey',
      }}>
      {children}
    </div>
  </Col>
)

storiesOf('Layout/Grid', module).addWithJSX('Default', () => (
  <>
    <DebugGrid />
    <Grid>
      <br />
      <h2>Start</h2>
      <Row align="start">
        <Column size={2}>2</Column>
        <Column size={3}>3</Column>
        <Column size={5}>5</Column>
      </Row>
      <br />
      <br />
      <h2>Center</h2>
      <Row align="center">
        <Column size={3}>3</Column>
        <Column size={7}>7</Column>
      </Row>
      <br />
      <br />
      <h2>End</h2>
      <Row align="end">
        <Column size={3}>3</Column>
        <Column size={7}>7</Column>
      </Row>
      <br />
      <Row align="end">
        <Column size={2}>2</Column>
        <Column size={3}>3</Column>
        <Column size={5}>5</Column>
      </Row>
    </Grid>
  </>
))
