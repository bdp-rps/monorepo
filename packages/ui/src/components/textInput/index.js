import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ valid, theme }) => ({
  appearance: 'none',
  borderRadius: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: theme.tokens.inputBorder,
  paddingLeft: theme.tokens.inputPaddingHorizontal,
  paddingRight: theme.tokens.inputPaddingHorizontal,
  paddingTop: theme.tokens.inputPaddingVertical,
  paddingBottom: theme.tokens.inputPaddingVertical,
  fontFamily: theme.fonts.content,
  fontSize: 16,
  width: '100%',
  ':focus': {
    outline: 0,
    borderColor: theme.tokens.primary,
  },
  ':disabled': {
    color: theme.tokens.inputDisabledForeground,
    backgroundColor: theme.tokens.inputDisabledBackground,
    cursor: 'not-allowed',
  },
  extend: [
    {
      condition: !valid,
      style: {
        borderColor: theme.tokens.destructive,
      },
    },
  ],
})

const maskStyle = ({ theme, position = 'start' }) => ({
  borderRadius: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: theme.tokens.inputBorder,
  backgroundColor: theme.tokens.inputBorder,
  paddingLeft: position === 'start' ? theme.tokens.inputPaddingHorizontal : 0,
  paddingRight: position === 'end' ? theme.tokens.inputPaddingHorizontal : 0,
  paddingTop: theme.tokens.inputPaddingVertical,
  paddingBottom: theme.tokens.inputPaddingVertical,
  fontFamily: theme.fonts.content,
  fontSize: 16,
})

export default function TextInput({
  name,
  value,
  valid,
  disabled,
  required,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  type,
  label,
  errorMessage,
  description,
  maskEnd,
  maskStart,
  ...props
}) {
  const styleProps = {
    valid,
    disabled,
  }

  const { css, theme } = useFela(styleProps)

  return (
    <Box space={1} shrink={1}>
      <Text
        as="label"
        htmlFor={name}
        variant="label"
        extend={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}>
        {label}
      </Text>
      <Box direction="row" alignItems="center">
        {!maskStart ? null : (
          <Box extend={maskStyle({ theme, position: 'start' })}>
            {maskStart}
          </Box>
        )}
        <input
          {...props}
          type={type}
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={css(style)}
        />
        {!maskEnd ? null : (
          <Box extend={maskStyle({ theme, position: 'end' })}>{maskEnd}</Box>
        )}
      </Box>
      {errorMessage && !valid && (
        <Text variant="note" color="foreground.destructive">
          {errorMessage}
        </Text>
      )}
      {description && <Text variant="note">{description}</Text>}
    </Box>
  )
}

TextInput.defaultProps = {
  valid: true,
  disabled: false,
  required: false,
  errorMessageVisible: true,
  type: 'text',
}

TextInput.propTypes = {
  /** The change event handler.<br>Function signature is (newValue, event) => handler. */
  onChange: PropTypes.func.isRequired,
  /** The bur event handler. */
  onBlur: PropTypes.func.isRequired,
  /** The focus event handler. */
  onFocus: PropTypes.func.isRequired,
  /** A unique semantic name that is connected to the label. */
  name: PropTypes.string.isRequired,
  /** The controlled value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets the validation state. */
  valid: PropTypes.bool,
  /** Sets disabled. */
  disabled: PropTypes.bool,
  /** Sets required. */
  required: PropTypes.bool,
  /** The label text. */
  label: PropTypes.string,
  /** An error message text that is displayed once valid is false. */
  errorMessage: PropTypes.string,
  /** Wether the errorMessage is displayed once valid is false. */
  errorMessageVisible: PropTypes.bool,
  /** Additional description information display beneath the input. */
  description: PropTypes.string,
  /** The input type. */
  type: PropTypes.oneOf(['text', 'number', 'tel', 'email', 'file']),
}
