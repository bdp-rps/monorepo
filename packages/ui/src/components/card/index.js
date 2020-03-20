import React from 'react'
import { useFela } from 'react-fela'

const style = ({ elevation }) => ({
  transition: 'box-shadow 200ms ease-in-out',
  borderRadius: 7,
  padding: 20,
  backgroundColor: 'white',
  extend: [
    {
      condition: elevation === 'minimal',
      style: {
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.28)',
        ':hover': {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.28)',
        },
      },
    },
    {
      condition: elevation === 'low',
      style: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.20)',
        ':hover': {
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.20)',
        },
      },
    },
    {
      condition: elevation === 'medium',
      style: {
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.16)',
        ':hover': {
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.20)',
        },
      },
    },
    {
      condition: elevation === 'high',
      style: {
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        ':hover': {
          boxShadow: '0 1px 10px rgba(0, 0, 0, 0.20)',
        },
      },
    },
  ],
})

export default function Card({ children, elevation = 'low' }) {
  const { css } = useFela({ elevation })

  return <div className={css(style)}>{children}</div>
}
