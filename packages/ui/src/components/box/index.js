import PropTypes from 'prop-types'
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
  grow,
  shrink,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  order,
  alignContent,
  justifyContent,
  alignSelf,
  flex,
  basis,
  direction,
  display,
  alignItems,
  wrap,
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
  as: As,
  extend,
  style: inlineStyle,
  spacing,
  ...props
}) {
  const { css, theme } = useFela(props)

  const domProps = removeResponsiveProps(props)

  return (
    <As {...domProps} style={inlineStyle} className={css(style, extend)}>
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

const responsiveProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  PropTypes.string,
  PropTypes.number,
])

const responsiveNumberProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.number),
  PropTypes.number,
])

const responsiveStringProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
])

const directionProp = PropTypes.oneOfType([
  PropTypes.arrayOf(
    PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse'])
  ),
  PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
])

Box.defaultProps = {
  direction: 'column',
  as: 'div',
  grow: 0,
  shrink: 0,
  basis: 'auto',
  direction: 'column',
  display: 'flex',
  alignItems: 'stretch',
  wrap: 'nowrap',
}

Box.propTypes = {
  /** The HTML node that is rendered. */
  as: PropTypes.string,
  /** Adds a custom CSS class. */
  className: PropTypes.string,
  /** Extends the Fela style object. */
  extends: PropTypes.object,
  /** Adds inline styles. */
  style: PropTypes.object,
  /** Adds spacing between children based on the baselineGrid. */
  spacing: responsiveNumberProp,
  /** Adds left padding based on the baselineGrid. */
  paddingLeft: responsiveProp,
  /** Adds right padding based on the baselineGrid. */
  paddingRight: responsiveProp,
  /** Adds bottom padding based on the baselineGrid. */
  paddingBottom: responsiveProp,
  /** Adds top padding based on the baselineGrid. */
  paddingTop: responsiveProp,
  /** Adds padding based on the baselineGrid.<br>Overwritten by specific directional paddings. */
  padding: responsiveProp,
  /** Adds left margin based on the baselineGrid. */
  marginLeft: responsiveProp,
  /** Adds right margin based on the baselineGrid. */
  marginRight: responsiveProp,
  /** Adds bottom margin based on the baselineGrid. */
  marginBottom: responsiveProp,
  /** Adds top margin based on the baselineGrid. */
  marginTop: responsiveProp,
  /** Adds margin based on the baselineGrid.<br>Overwritten by specific directional margins. */
  margin: responsiveProp,
  /** Sets display. */
  display: responsiveStringProp,
  /** Sets flex-wrap. */
  wrap: responsiveStringProp,
  /** Sets the flex-direction. */
  direction: directionProp,
  /** Sets flex-grow. */
  grow: responsiveNumberProp,
  /** Sets flex-shrink. */
  shrink: responsiveNumberProp,
  /** Sets flex-basis. */
  basis: responsiveProp,
  /** Sets order. */
  order: responsiveNumberProp,
  /** Sets flex. */
  flex: responsiveProp,
  /** Sets justify-content. */
  justifyContent: responsiveStringProp,
  /** Sets align-content. */
  alignContent: responsiveStringProp,
  /** Sets align-items. */
  alignItems: responsiveStringProp,
  /** Sets align-self. */
  alignSelf: responsiveStringProp,
  /** Sets max-width. */
  maxWidth: responsiveProp,
  /** Sets min-width. */
  minWidth: responsiveProp,
  /** Sets width. */
  width: responsiveProp,
  /** Sets max-height. */
  maxHeight: responsiveProp,
  /** Sets min-height. */
  minHeight: responsiveProp,
  /** Sets height. */
  height: responsiveProp,
}
