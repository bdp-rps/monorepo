/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const DASH = /-([a-z0-9])/g
function toUpper(match) {
  return match[1].toUpperCase()
}

function upperCase(value) {
  return value.charAt(0).toUpperCase() + value.substr(1).replace(DASH, toUpper)
}
const icons = fs
  .readdirSync(path.join(__dirname, '../src/components/icons/svg'))
  .map(name => name.replace('.svg', ''))
  .filter(name => name !== '.DS_Store')

fs.writeFile(
  path.join(__dirname, '../src/components/icons/index.js'),
  icons
    .map(icon => `import Icon${upperCase(icon)} from "./js/${icon}"`)
    .join('\n') +
    '\n\n' +
    'export {\n  ' +
    icons.map(icon => 'Icon' + upperCase(icon)).join(',\n  ') +
    '\n}',
  err => {
    if (err) {
      console.error('Something went wrong.')
    }

    console.log('Successfully build icons.')
  }
)
