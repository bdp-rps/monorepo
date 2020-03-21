import React from 'react'
import { setAddon, configure, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'

setAddon(JSXAddon)

import FelaWrapper from './FelaWrapper'

const req = require.context('../src/components', true, /stories\.js$/)

function loadStories() {
  const stories = [
    // Core
    './text/stories.js',

    // Layout
    './box/stories.js',
    './spacer/stories.js',
    './card/stories.js',
    './grid/stories.js',
    './scrollView/stories.js',

    // Forms
    './textInput/stories.js',
    './textArea/stories.js',
    './selectInput/stories.js',

    // Molecules
    './tile/stories.js',
  ]

  require('./debug.js')

  stories.forEach(filename => req(filename))
}

addDecorator(withKnobs)
addDecorator(story => {
  const content = story()
  return <FelaWrapper>{content}</FelaWrapper>
})

configure(loadStories, module)
