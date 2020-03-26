import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ theme, isValid }) => ({
  appearance: 'none',
  boxSizing: 'border-box',
  borderRadius: '50%',
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
  borderColor: theme.tokens.inputBorder,
  position: 'relative',
  cursor: 'pointer',
  outline: 0,

  ':checked': {
    ':before': {
      boxSizing: 'border-box',
      display: 'block',
      content: "''",
      borderRadius: '50%',
      position: 'absolute',
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: theme.tokens.primary,
    },
  },

  ':disabled': {
    backgroundColor: theme.tokens.inputDisabledBackground,
    borderColor: theme.tokens.inputDisabledBorder,
    cursor: 'not-allowed',
    ':checked': {
      ':before': {
        backgroundColor: theme.tokens.inputDisabledForeground,
      },
    },
  },

  extend: [
    {
      condition: !isValid,
      style: {
        borderColor: theme.tokens.alert,
        ':focus': {
          borderColor: theme.tokens.primary,
        },
      },
    },
  ],
})

export default function Radio({
  isValid,
  disabled,
  required,
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  label,
  errorMessage,
  description,
  ...props
}) {
  const styleProps = {
    isValid,
    disabled,
  }

  const { css, theme } = useFela(styleProps)

  return (
    <Box>
      <Box direction="row" space={1.5} alignItems="center">
        <input
          type="radio"
          id={name + id}
          name={name}
          value={name}
          checked={value === id}
          disabled={disabled}
          required={required}
          onChange={e => onChange(id, e)}
          onBlur={onBlur}
          onFocus={onFocus}
          className={css(style)}
        />
        <label
          htmlFor={name + id}
          className={css({ cursor: disabled ? 'not-allowed' : 'pointer' })}>
          <Text intent="label">{label}</Text>
        </label>
      </Box>
      {errorMessage ? (
        <Text intent="note" extend={{ color: theme.tokens.alert }}>
          {errorMessage}
        </Text>
      ) : null}
      {description ? <Text intent="note">{description}</Text> : null}
    </Box>
  )
}

Radio.defaultProps = {
  isValid: true,
  value: false,
  disabled: false,
  required: false,
}

Radio.propTypes = {
  /** The change event handler.<br>Function signature is (newValue, event) => handler. */
  onChange: PropTypes.func.isRequired,
  /** A unique semantic name for the radio group. */
  name: PropTypes.string.isRequired,
  /** The controlled value. */
  value: PropTypes.bool,
  /** A unique id for that radio button. */
  id: PropTypes.bool,
  /** Sets the validation state. */
  isValid: PropTypes.bool,
  /** Sets disabled. */
  disabled: PropTypes.bool,
  /** Sets required. */
  required: PropTypes.bool,
  /** The label text. */
  label: PropTypes.string,
  /** An error message text that is displayed once isValid is false. */
  errorMessage: PropTypes.string,
  /** Additional description information display beneath the input. */
  description: PropTypes.string,
}
