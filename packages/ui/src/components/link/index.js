import React from 'react'
import { useFela } from 'react-fela'

const style = ({ disabled, theme }) => ({
  fontSize: 16,
  fontFamily: theme.fonts.content,
  color: theme.tokens.primary,
  ':hover': {
    color: theme.tokens.primaryLight,
  },
})

export default function Link({ href, disabled, children, ...props }) {
  const styleProps = {
    disabled,
  }

  const { css } = useFela(styleProps)

  return (
    <a {...props} href={href} disabled={disabled} className={css(style)}>
      {children}
    </a>
  )
}
