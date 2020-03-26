Grid is used to create evenly spread layouts with 12 columns.

### Left Aligned

```jsx
const Column = ({ size, children }) => (
  <Col size={size} extend={{ padding: 10, border: '1px solid grey' }}>
    {children}
  </Col>
)

;<Grid>
  <Row align="start">
    <Column size={2}>2</Column>
    <Column size={3}>3</Column>
    <Column size={5}>5</Column>
  </Row>
</Grid>
```

### Center Aligned

```jsx
const Column = ({ size, children }) => (
  <Col size={size} extend={{ padding: 10, border: '1px solid grey' }}>
    {children}
  </Col>
)

;<Grid>
  <Row align="center">
    <Column size={3}>3</Column>
    <Column size={7}>7</Column>
  </Row>
</Grid>
```

### End Aligned

```jsx
const Column = ({ size, children }) => (
  <Col size={size} extend={{ padding: 10, border: '1px solid grey' }}>
    {children}
  </Col>
)

;<Grid>
  <Row align="end">
    <Column size={3}>3</Column>
    <Column size={7}>7</Column>
  </Row>
  <br />
  <Row align="end">
    <Column size={2}>2</Column>
    <Column size={3}>3</Column>
    <Column size={5}>5</Column>
  </Row>
</Grid>
```
