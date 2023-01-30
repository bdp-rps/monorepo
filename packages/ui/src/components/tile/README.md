Tiles are used to display a list of highlighted items such as blog posts or local groups.

### Basic Usage

```jsx
<Box maxWidth={350}>
  <Tile>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam
  </Tile>
</Box>
```

### Title

```jsx
<Box maxWidth={350}>
  <Tile title="Hello there">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam
  </Tile>
</Box>
```

### Teaser Image

```jsx
<Box maxWidth={350}>
  <Tile image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam
  </Tile>
</Box>
```

### Title + Teaser Image

```jsx
<Box maxWidth={350}>
  <Tile
    image="https://www.pfadfinden.de/fileadmin/_processed_/1/e/csm_BdP_2019-06-09_D5_4403_429113cfb3.jpg"
    title="Hello there"
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam
  </Tile>
</Box>
```
