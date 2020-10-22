Assuming you have a basic React project set up, start by simply installing the design system via [Yarn]() or [npm]().

```bash
# yarn
yarn @bdp-rps/ui

# npm
npm i @bdp-rps/ui
```

## Basic Usage

In order to use the provided components, your app must be wrapped with the StyleProvider component.<br>
You also need to pass a theme in order to get the colors working.

```js static
import { StyleProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/light'

const App = () => (
  <StyleProvider theme={theme}>{/* YOUR APP HERE */}</StyleProvider>
)
```
