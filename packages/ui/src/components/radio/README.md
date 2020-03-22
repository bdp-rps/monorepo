A basic Checkbox form input that is best used as a controlled input field with `React.useState`.

### Basic Usage

```jsx
<Box gap={4}>
  <Radio name="A" label="Default" />
  <Radio
    label="Checked"
    description="This is checked by default"
    name="A"
    id="A"
    value="A"
  />
  <Radio label="Disabled" disabled={true} />
  <Radio label="Disabled + Checked" disabled={true} id="A" name="B" value="A" />
  <Radio
    label="Error"
    errorMessage="Something went wrong."
    name="B"
    isValid={false}
  />
  <Radio
    label="Error + Checked"
    description="This is checked by default"
    errorMessage="Something went wrong."
    name="C"
    id="A"
    value="A"
    isValid={false}
  />
  <Radio
    label="Error + Disabled + Checked"
    errorMessage="Something went wrong."
    name="D"
    id="A"
    value="A"
    isValid={false}
    disabled={true}
  />
</Box>
```
