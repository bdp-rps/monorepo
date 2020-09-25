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
    selector: 'body, html, #__next',
    style: {
      width: '100%',
      height: '100%',
    },
  },
  {
    selector: 'html',
    style: {
      WebkitTextSizeAdjust: '100%',
    },
  },
  {
    selector: '#__next',
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      alignItems: 'stretch',
      maxHeight: '100vh',
    },
  },
]
