Well, a button, not much to say about that.

### Basic Usage

```jsx
<Box space={2}>
  <Button variant="primary" onClick={() => console.log('Clicked')}>
    Click Me
  </Button>
  <Button variant="secondary">Click Me</Button>
</Box>
```

### Disabled

```jsx
<Box space={2}>
  <Button disabled variant="primary" onClick={() => console.log('Clicked')}>
    Click Me
  </Button>
  <Button disabled variant="secondary">
    Click Me
  </Button>
</Box>
```

### Loading

```jsx
<Box space={2}>
  <Button variant="primary" loading>
    Click Me
  </Button>
  <Button variant="secondary" loading>
    Click Me
  </Button>
</Box>
```

### Negative

```jsx
<Box space={2}>
  <Button variant="primary" intent="negative">
    Click Me
  </Button>
  <Button variant="secondary" intent="negative">
    Click Me
  </Button>
  <Button variant="primary" intent="negative" loading>
    Click Me
  </Button>
  <Button variant="secondary" intent="negative" loading>
    Click Me
  </Button>
</Box>
```

### Sizes

```jsx
<Box space={2}>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</Box>
```

### onClick

```jsx
<Box space={2}>
  <Button variant="primary" onClick={() => alert('Clicked')}>
    Click Me
  </Button>
</Box>
```

### href

```jsx
<Box space={2}>
  <Button variant="primary" href="/test">
    Click Me
  </Button>
</Box>
```

### Submit Input

```jsx
<Box space={2}>
  <Button submit variant="primary">
    Click Me
  </Button>
</Box>
```
