import { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
  let [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    let timeout = setTimeout(() => setDebouncedValue(() => value), delay)

    return () => clearTimeout(timeout)
  }, [value])

  return debouncedValue
}
