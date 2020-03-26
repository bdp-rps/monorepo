A basic Checkbox form input that is best used as a controlled input field with `React.useState`.

### Basic Usage

```jsx
<Box space={4}>
  <Checkbox label="Default" />
  <Checkbox label="Checked" value={true} />
</Box>
```

### Description & Error Message

```jsx
<Box space={4}>
  <Checkbox label="Default" description="Some description" />
  <Checkbox
    label="Error"
    description="This is checked by default"
    errorMessage="Something went wrong."
    isValid={false}
    value={true}
  />
</Box>
```

### Disabled

```jsx
<Box space={4}>
  <Checkbox label="Default" disabled={true} />
  <Checkbox label="Checked" disabled={true} value={true} />
  <Checkbox
    label="Error + Checked"
    errorMessage="Something went wrong."
    isValid={false}
    disabled={true}
    value={true}
  />
</Box>
```

### Controlled

```jsx
const [value, setValue] = React.useState(false)

;<Checkbox
  label="Default"
  value={value}
  onChange={setValue}
  isValid={!value}
  errorMessage="Check me please"
/>
```
