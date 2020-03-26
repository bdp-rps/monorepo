The main navigation bar that is filled with instances of `<NavBarItem>`.

### Basic Usage

```jsx
<NavBar>
  <Box space={2} direction="row">
    <NavBarItem href="/meute">Meute</NavBarItem>
    <NavBarItem href="/sippe">Sippe</NavBarItem>
    <NavBarItem onClick={() => alert('clicked')}>Clickable Item</NavBarItem>
  </Box>
</NavBar>
```
