import React from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Box from '../box'

import applySpacing from '../../utils/applySpacing'

export default function Spacer({ size = 1 }) {
  const { theme } = useFela()

  const spacing = applySpacing(theme.baselineGrid)

  return <Box width={spacing(size)} basis={spacing(size)} />
}
