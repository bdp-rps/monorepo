import React from 'react'
import { setAddon, configure, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'react-fela'

import theme from '../src/themes/light'

setAddon(JSXAddon)

import FelaProvider from '../src/styling/FelaProvider'

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
  return <FelaProvider theme={theme}>{content}</FelaProvider>
})

configure(loadStories, module)
