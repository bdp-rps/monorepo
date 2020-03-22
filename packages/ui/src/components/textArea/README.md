A general purpose muli-line text input field that is used with controlled state manangement.

### Basic Usage

```jsx
<Box gap={4}>
  <TextArea name="firstname" label="Label" placeholder="e.g., Max" />
</Box>
```

### Description & Error Message

```jsx
<Box gap={4}>
  <TextArea
    name="firstname-invalid"
    label="Label"
    description="Your firstname please"
    isValid={false}
    errorMessage="You have to enter a name."
    placeholder="e.g., Max"
  />
</Box>
```

### Disabled

```jsx
<Box gap={4}>
  <TextArea
    name="firstname-disabled"
    disabled={true}
    label="Label"
    description="Your firstname please"
    placeholder="e.g., Max"
  />
</Box>
```

### Controlled

```jsx
const [value, setValue] = React.useState('')

;<Box gap={4}>
  <TextArea
    name="firstname-controlled"
    value={value}
    onChange={setValue}
    label="Label"
    isValid={value.length >= 3}
    errorMessage="Please enter at least 3 chars."
    description="Your firstname please"
    placeholder="e.g., Max"
  />
</Box>
```
