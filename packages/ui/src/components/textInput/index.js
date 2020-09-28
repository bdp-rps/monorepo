import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ isValid, disabled, theme }) => ({
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
      condition: !isValid,
      style: {
        borderColor: theme.tokens.destructive,
      },
    },
  ],
})

export default function TextInput({
  name,
  value,
  isValid,
  disabled,
  required,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  type,
  label,
  errorMessage,
  errorMessageVisible = true,
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
      <label
        htmlFor={name}
        className={css({ cursor: disabled ? 'not-allowed' : 'pointer' })}>
        <Text intent="label">{label}</Text>
      </label>
      <input
        {...props}
        type={type}
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value, e)}
        onBlur={onBlur}
        onFocus={onFocus}
        className={css(style)}
      />
      {errorMessage && errorMessageVisible && !isValid ? (
        <Text intent="note" extend={{ color: theme.tokens.destructive }}>
          {errorMessage}
        </Text>
      ) : null}
      {description ? <Text intent="note">{description}</Text> : null}
    </Box>
  )
}

TextInput.defaultProps = {
  isValid: true,
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
  value: PropTypes.string,
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
  /** Wether the errorMessage is displayed once isValid is false. */
  errorMessageVisible: PropTypes.bool,
  /** Additional description information display beneath the input. */
  description: PropTypes.string,
  /** The input type. */
  type: PropTypes.oneOf(['text', 'number', 'tel', 'email']),
}
