import React from 'react'
import { useFela } from 'react-fela'

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
