import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

const style = ({ valid, theme }) => ({
  display: 'flex',
  borderRadius: 0,
  appearance: 'none',
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

export default function SelectInput({
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
  children,
}) {
  const styleProps = {
    valid,
    disabled,
  }

  const { css } = useFela(styleProps)

  return (
    <Box space={1} grow={1} shrink={1}>
      <Text
        as="label"
        htmlFor={name}
        variant="label"
        extend={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}>
        {label}
      </Text>
      <select
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={css(style)}>
        {children}
      </select>

      {errorMessage && !valid && (
        <Text variant="note" color="foreground.destructive">
          {errorMessage}
        </Text>
      )}
      {description && <Text variant="note">{description}</Text>}
    </Box>
  )
}
