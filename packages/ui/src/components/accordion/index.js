import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'
import Click from '../click'
import { IconChevronUp, IconChevronDown } from '../icons'

import generateId from '../../utils/generateId'
import useDisclosure from '../../hooks/useDisclosure'
import useHidden from '../../hooks/useHidden'
export default function Accordion({
  summary,
  value,
  children,
  defaultExpanded,
  onClick,
  onChange,
  ...props
}) {
  const id = generateId(summary)
  const { isExpanded, toggleProps, contentProps } = useDisclosure({
    defaultExpanded,
    id,
  })
  const { style } = useHidden()
  const { theme } = useFela()

  const icon = isExpanded ? (
    <IconChevronUp size={16} />
  ) : (
    <IconChevronDown size={16} />
  )

  useEffect(() => {
    if (onChange) {
      onChange(isExpanded)
    }
  }, [isExpanded])

  return (
    <Box
      paddingBottom={isExpanded ? 6 : 0}
      extend={{
        ':focus-within': {
          boxShadow: '0 0 0 2px ' + theme.tokens.focusColor,
          ':not(:focus-visible)': {
            // this doesnt work in chrome for some reason...
            boxShadow: 'none',
          },
        },
      }}
    >
      <Box
        {...props}
        {...toggleProps}
        onClick={() => {
          if (onClick) {
            onClick()
          } else {
            toggleProps.onClick()
          }
        }}
        as={Click}
        direction="row"
        alignItems="center"
        justifyContent="center"
        paddingVertical={6}
        alignSelf="center"
        width="100%"
        space={4}
        extend={{
          outline: 0,
        }}
      >
        <Box grow={1} shrink={1}>
          {typeof summary === 'string' ? (
            <Text variant="label">{summary}</Text>
          ) : (
            summary
          )}
        </Box>
        {value && (
          <Box shrink={1}>
            <Text as="div" align="right">
              {value}
            </Text>
          </Box>
        )}
        <Box marginTop={0.25}>{icon}</Box>
      </Box>
      <Box
        {...contentProps}
        width="100%"
        extend={isExpanded ? undefined : style}
      >
        {children}
      </Box>
    </Box>
  )
}

Accordion.propTypes = {
  /** The accordion summary text */
  summary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** An optional aggregation value for more context */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The expandable content */
  children: PropTypes.node,
  /** Whether the accordion is expanded by default, can also be used to controll the accordion entirely */
  defaultExpanded: PropTypes.bool,
  /** A click handler that is triggered before the expanded state is changed */
  onClick: PropTypes.func,
  /** A change handler that is triggered after the expanded state is changed */
  onChange: PropTypes.func,
}
