import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Card from '../card'
import Text from '../text'

export default function Modal({ children, visible, title, onClose }) {
  const { theme } = useFela()
  const innerRef = useRef()

  if (!visible) {
    return null
  }

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      onClick={(e) => {
        const isClickOnInner = innerRef.current.contains(e.target)

        if (!isClickOnInner && onClose) {
          onClose()
        }
      }}
      extend={{
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        overflow: 'auto',
      }}
    >
      <Box
        ref={innerRef}
        alignSelf={['stretch', , 'center']}
        alignItems={['stretch', , 'center']}
        justifyContent="center"
        width="100%"
        padding={2}
        grow={[1, , 0]}
        shrink={[0, , 1]}
      >
        <Card elevation="medium" space={title ? 2 : 0} extend={{ padding: 0 }}>
          {title ? (
            <Box
              padding={2}
              width="100%"
              extend={{ backgroundColor: theme.tokens.secondary }}
            >
              <Text variant="subtitle" color={theme.tokens.primary} height={1}>
                {title}
              </Text>
            </Box>
          ) : null}
          <Box padding={5}>{children}</Box>
        </Card>
      </Box>
    </Box>
  )
}

Modal.defaultProps = {
  visible: false,
}

Modal.propTypes = {
  /** Sets the visiblity of the modal. */
  visible: PropTypes.bool,
  /** A listener that is called once clicked outside of the modal. */
  onClose: PropTypes.func,
}
