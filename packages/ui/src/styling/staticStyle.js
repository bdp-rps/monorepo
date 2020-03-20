export default [
  {
    selector: '*',
    style: {
      margin: 0,
      padding: 0,
    },
  },
  {
    selector: '::-webkit-scrollbar',
    style: {
      display: 'none',
    },
  },
  {
    selector: 'div',
    style: {
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      flexShrink: 0,
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
  },
  {
    selector: 'body, html, #__next',
    style: {
      width: '100%',
      height: '100%',
    },
  },
]
