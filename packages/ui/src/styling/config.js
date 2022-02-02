import * as React from 'react'
import NextLink from 'next/link'

import core from '../themes/core'
import bdp from '../themes/bdp'
import kabisa from '../themes/kabisa'
import raus from '../themes/raus'

export default {
  forms: {
    defaultRequiredErrorMessage: 'Das ist ein Pflichtfeld.',
  },
  theming: {
    defaultTheme: 'bdp',
    core,
    variants: {
      bdp,
      kabisa,
      raus,
    },
  },
  linkComponent: ({ children, href, ...linkProps }) => {
    if (!href) {
      return <span {...linkProps}>{children}</span>
    }

    if (typeof href === 'object' || href.startsWith('/')) {
      return (
        <NextLink href={href}>
          <a {...linkProps}>{children}</a>
        </NextLink>
      )
    }
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    )
  },
}
