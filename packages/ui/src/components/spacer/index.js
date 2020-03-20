import React from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import applySpacing from '../../utils/applySpacing'

const style = ({ size = 1, theme }) => {
  const spacing = applySpacing(theme.baselineGrid)

  return {
    width: spacing(size),
    flexBasis: spacing(size),
  }
}

export default function Spacer(props) {
  const { css } = useFela(props)

  return <div className={css(style)} />
}
