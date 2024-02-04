import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ valid, theme }) => ({
  flexGrow: 1,
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
      condition: !valid,
      style: {
        borderColor: theme.tokens.destructive,
      },
    },
  ],
})

const TextArea = forwardRef(
  (
    {
      name,
      value,
      valid = true,
      disabled,
      required,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      label,
      errorMessage,
      description,
      extend,
    },
    ref
  ) => {
    const styleProps = {
      valid,
      disabled,
    }

    const { css } = useFela(styleProps)

    return (
      <Box extend={extend} space={1} width="100%">
        <Text
          as="label"
          htmlFor={name}
          variant="label"
          extend={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}>
          {label}
        </Text>
        <textarea
          ref={ref}
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
        {errorMessage && !valid && (
          <Text variant="note" color="foreground.destructive">
            {errorMessage}
          </Text>
        )}
        {description && <Text variant="note">{description}</Text>}
      </Box>
    )
  }
)

TextArea.displayName = 'TextArea'
export default TextArea

TextArea.defaultProps = {
  valid: true,
  disabled: false,
  required: false,
}

TextArea.propTypes = {
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
