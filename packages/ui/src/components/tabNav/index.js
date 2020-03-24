import PropTypes from 'prop-types'
import React, { createContext } from 'react'

import Box from '../box'

export const TabNavContext = createContext()

export default function TabNav({ onChange, children }) {
  return (
    <TabNavContext.Provider value={{ onChange }}>
      <Box as="nav" direction="row" justifyContent="flex-start">
        {children}
      </Box>
    </TabNavContext.Provider>
  )
}

TabNav.propTypes = {
  /** Change event handler that's triggered by clicking on inner <TabNavItem>s. */
  onChange: PropTypes.func,
}
