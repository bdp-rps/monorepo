import * as React from 'react'
import NextLink from 'next/link'

import core from '../themes/core'
import bdp from '../themes/bdp'
import kabisa from '../themes/kabisa'

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
    },
  },
  linkComponent: ({ children, href, ...linkProps }) => {
    if (!href) {
      return <p {...linkProps}>{children}</p>
    }

    if (typeof href === 'object' || href.startsWith('/')) {
      return (
        <NextLink action={href}>
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
