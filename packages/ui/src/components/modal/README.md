A simple loading component.

### Basic Usage

```jsx
const [visible, setVisible] = React.useState(false)

;<Box space={4}>
  <Button onClick={() => setVisible(true)}>Open</Button>
  <Modal visible={visible} onClose={() => setVisible(false)}>
    Modal
  </Modal>
</Box>
```

### Titled

```jsx
const [visible, setVisible] = React.useState(false)

;<Box space={4}>
  <Button onClick={() => setVisible(true)}>Open</Button>
  <Modal title="Title" visible={visible} onClose={() => setVisible(false)}>
    Modal
  </Modal>
</Box>
```
