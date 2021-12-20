import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

import { TabNavContext } from '../tabNav'

export default function TabNavItem({ disabled, id, active, children }) {
  const { onChange } = useContext(TabNavContext)
  const { theme } = useFela()

  return (
    <Box
      alignSelf="auto"
      alignItems="center"
      minWidth={50}
      paddingTop={2}
      paddingBottom={1.5}
      marginLeft={2}
      marginRight={2}
      extend={[
        {
          userSelect: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition:
            'border-bottom-color 200ms ease-in-out, color 200ms ease-in-out',
          borderBottomWidth: 3,
          borderBottomStyle: 'solid',
          borderBottomColor: active ? theme.tokens.primary : 'transparent',
          ':first-child': {
            marginLeft: 0,
          },
          ':last-child': {
            marginRight: 0,
          },
          ':hover': {
            '> p:not([disabled])': {
              color: theme.tokens.primaryLight,
            },
          },
        },
      ]}
      onClick={() => {
        if (!disabled) {
          onChange(id)
        }
      }}>
      <Text
        color={
          disabled
            ? theme.tokens.inputDisabledForeground
            : active
            ? theme.tokens.primary
            : theme.tokens.foreground
        }>
        {children}
      </Text>
    </Box>
  )
}

TabNavItem.defaultProps = {
  disabled: false,
}

TabNavItem.propTypes = {
  /** Disables this nav item making it unclickable. */
  disabled: PropTypes.bool,
  /** Sets the active tab for accessibility. */
  active: PropTypes.bool,
  /** A unique id that is assigned to the tab for reference. */
  id: PropTypes.string.isRequired,
}
