import React, { Children } from 'react'
import { useFela } from 'react-fela'

import Spacer from '../spacer'

import applySpacing from '../../utils/applySpacing'
import { responsiveProps } from '../../styling/getFelaRenderer'

const removeResponsiveProps = props =>
  Object.keys(props).reduce((domProps, key) => {
    if (!responsiveProps[key]) {
      domProps[key] = props[key]
    }

    return domProps
  }, {})

const style = ({
  theme,
  className,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  margin,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  height,
  width,
  grow = 0,
  shrink = 0,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  order,
  alignContent,
  justifyContent,
  alignSelf,
  flex,
  basis = 'auto',
  direction = 'column',
  display = 'flex',
  alignItems = 'stretch',
  wrap = 'nowrap',
}) => {
  const spacing = applySpacing(theme.baselineGrid)

  return {
    _className: className,
    boxSizing: 'border-box',
    flexDirection: direction,
    flexWrap: wrap,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    flex,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    order,
    display,
    maxWidth,
    minWidth,
    width,
    maxHeight,
    minHeight,
    height,
    padding: spacing(padding),
    paddingLeft: spacing(paddingLeft),
    paddingRight: spacing(paddingRight),
    paddingBottom: spacing(paddingBottom),
    paddingTop: spacing(paddingTop),
    margin: spacing(margin),
    marginLeft: spacing(marginLeft),
    marginRight: spacing(marginRight),
    marginBottom: spacing(marginBottom),
    marginTop: spacing(marginTop),
  }
}

export default function Box({
  children,
  as: As = 'div',
  extend,
  spacing,
  ...props
}) {
  const { css, theme } = useFela(props)

  const domProps = removeResponsiveProps(props)

  return (
    <As {...domProps} className={css(style, extend)}>
      {spacing
        ? Children.toArray(children).map((child, index, arr) => (
            <React.Fragment key={index}>
              {child}
              {index === arr.length - 1 ? null : <Spacer size={spacing} />}
            </React.Fragment>
          ))
        : children}
    </As>
  )
}
