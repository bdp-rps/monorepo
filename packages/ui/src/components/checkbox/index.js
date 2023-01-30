import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ theme, valid }) => ({
  appearance: 'none',
  boxSizing: 'border-box',
  borderRadius: 0,
  width: 24,
  height: 24,
  margin: 0,
  padding: 0,
  flexShrink: 0,
  flexGrow: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderStyle: 'solid',
  backgroundColor: 'white',
  borderColor: theme.tokens.inputBorder,
  position: 'relative',
  cursor: 'pointer',
  outline: 0,

  ':checked': {
    ':before': {
      boxSizing: 'border-box',
      transform: 'translateY(-2px) rotate(45deg)',
      display: 'block',
      content: "''",
      width: 7,
      height: 13,
      position: 'absolute',
      borderRightWidth: 2,
      borderRightStyle: 'solid',
      borderRightColor: theme.tokens.primary,
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.tokens.primary,
    },
  },

  ':disabled': {
    backgroundColor: theme.tokens.inputDisabledBackground,
    borderColor: theme.tokens.inputDisabledBorder,
    cursor: 'not-allowed',
    ':checked': {
      ':before': {
        borderRightColor: theme.tokens.inputDisabledForeground,
        borderBottomColor: theme.tokens.inputDisabledForeground,
      },
    },
  },

  extend: [
    {
      condition: !valid,
      style: {
        borderColor: theme.tokens.destructive,
        ':focus': {
          borderColor: theme.tokens.primary,
        },
      },
    },
  ],
})

export default function Checkbox({
  valid,
  disabled,
  required,
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  label,
  errorMessage,
  description,
}) {
  const styleProps = {
    valid,
    disabled,
  }

  const { css } = useFela(styleProps)

  return (
    <Box space={1}>
      <Box direction="row" space={1.5}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={css(style)}
        />

        <Text
          as="label"
          htmlFor={name}
          variant="label"
          extend={{
            marginTop: 2,
            cursor: disabled ? 'not-allowed' : 'pointer',
            lineHeight: 1.4,
          }}
        >
          {label}
        </Text>
      </Box>
      {errorMessage && !valid ? (
        <Text variant="note" color="foreground.destructive">
          {errorMessage}
        </Text>
      ) : null}
      {description ? <Text variant="note">{description}</Text> : null}
    </Box>
  )
}

Checkbox.defaultProps = {
  valid: true,
  value: false,
  disabled: false,
  required: false,
}

Checkbox.propTypes = {
  /** The change event handler.<br>Function signature is (newValue, event) => handler. */
  onChange: PropTypes.func.isRequired,
  /** A unique semantic name that is connected to the label. */
  name: PropTypes.string.isRequired,
  /** The controlled value. */
  value: PropTypes.bool,
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
  /** Additional description information display beneath the input. */
  description: PropTypes.string,
}
