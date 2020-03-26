import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ isValid, disabled, theme }) => ({
  display: 'flex',
  borderRadius: 0,
  appearance: 'none',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 0,
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

export default function SelectInput({
  name,
  value,
  isValid = true,
  disabled,
  required,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  type = 'text',
  label,
  errorMessage,
  errorMessageVisible,
  description,
  children,
}) {
  const styleProps = {
    isValid,
    disabled,
  }

  const { css, theme } = useFela(styleProps)

  return (
    <Box>
      <label htmlFor={name}>
        <Text intent="label">{label}</Text>
      </label>
      <select
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value, e)}
        onBlur={onBlur}
        onFocus={onFocus}
        className={css(style)}>
        {!required ? <option value="" /> : null}
        {children}
      </select>

      {errorMessage && errorMessageVisible ? (
        <Text intent="note" extend={{ color: theme.tokens.destructive }}>
          {errorMessage}
        </Text>
      ) : null}
      {description ? <Text intent="note">{description}</Text> : null}
    </Box>
  )
}
