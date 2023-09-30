import fs from 'fs'
import React, { createContext, useState, useEffect } from 'react'

export const IndexContext = createContext({
  addIndex: () => null,
})

export function IndexProvider({ children, count }) {
  const [index, setIndex] = useState({})
  const [innerCount, setInnerCount] = useState(0)

  function addIndex(id, page) {
    setIndex((index) => ({ ...index, [id]: page }))
    setInnerCount((c) => c + 1)
  }

  useEffect(() => {
    if (innerCount === count) {
      fs.writeFile(
        './src/templates/index.json',
        JSON.stringify(index),
        (err) => {
          if (err) {
            console.error(err)
          }

          console.log('Successfully build ohrwurm index.')
        }
      )
    }
  }, [index, innerCount])

  return (
    <IndexContext.Provider value={addIndex}>{children}</IndexContext.Provider>
  )
}
