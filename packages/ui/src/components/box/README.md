Box is the default layout component that implements sensitive flexbox defaults similar to React Native.  
It supports a couple of responsive props which means that it accepts either a single value or an array of values per breakpoint.

Box is a direct export of [ambrose](https://github.com/robinweser/ambrose)'s Box component.

### Basic Usage

```jsx
<Box space={5} direction="row">
  <Box padding={10} extend={{ backgroundColor: 'grey' }} />
  <Box
    padding={10}
    space={3}
    direction="row"
    extend={{ backgroundColor: 'grey' }}
  >
    <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
    <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
  </Box>
</Box>
```

### Responsive Props

```jsx
<Box
  padding={10}
  space={[3, , , 10]}
  direction={['column', , , 'row']}
  extend={{ backgroundColor: 'grey' }}
>
  <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
  <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
</Box>
```
