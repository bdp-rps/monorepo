Box is the default layout component that implements sensitive flexbox defaults similar to React Native.  
It supports a couple of responsive props which means that it accepts either a single value or an array of values per breakpoint.

### Basic Usage

```jsx
<Box spacing={5} direction="row">
  <Box padding={10} extend={{ backgroundColor: 'grey' }} />
  <Box
    padding={10}
    spacing={3}
    direction="row"
    extend={{ backgroundColor: 'grey' }}>
    <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
    <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
  </Box>
</Box>
```

### Responsive Props

```jsx
<Box
  padding={10}
  spacing={[3, , , 10]}
  direction={['column', , , 'row']}
  extend={{ backgroundColor: 'grey' }}>
  <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
  <Box padding={10} extend={{ backgroundColor: 'lightgrey' }} />
</Box>
```
