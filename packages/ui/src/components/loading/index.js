import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

export default function Loading({ size, className, color }) {
  const { theme } = useFela()

  const pxSize = size * theme.baselineGrid

  const r = pxSize / 2

  const radius = r
  const lowRadius = r / 3
  const height = pxSize
  const width = pxSize * 3 + r * 2

  const animateValues = [radius, lowRadius, radius, radius].join(';')

  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 ' + width + ' ' + height}
      xmlns="http://www.w3.org/2000/svg"
      fill={color || theme.tokens.primary}>
      <circle cx={radius} cy={radius} r={radius}>
        <animate
          attributeName="r"
          from={radius}
          to={radius}
          begin="0s"
          dur="1.5s"
          values={animateValues}
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="1.5s"
          values="1;.5;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={r * 3 + size} cy={radius} r={radius}>
        <animate
          attributeName="r"
          from={radius}
          to={radius}
          begin="0.3s"
          dur="1.5s"
          values={animateValues}
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0.3s"
          dur="1.5s"
          values="1;.5;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={r * 5 + size * 2} cy={radius} r={radius}>
        <animate
          attributeName="r"
          from={radius}
          to={radius}
          begin="0.6s"
          dur="1.5s"
          values={animateValues}
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0.6s"
          dur="1.5s"
          values="1;.5;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

Loading.defaultProps = {
  size: 5,
}

Loading.propTypes = {
  /** How big the loading is rendered.<br>Based on the baselineGird. */
  size: PropTypes.number,
  /** A custom color to replace the default primary color. */
  color: PropTypes.string,
}
