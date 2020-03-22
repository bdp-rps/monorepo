The Design System ships with a powerful styling engine called [Fela](https://fela.js.org).<br>
It provides several plugins to achieve common tasks such as vendor prefixing, fallback values and responsive values.

### Theming

Many design tokens are provided by a theme that sets all important values such as colors, sizes, fonts and breakpoints. Depending on the breakpoints, some components take so called responsive values that map to each breakpoint.

### Responsive Values

The default theme shipped is a light theme with the following breakpoints:

```noeditor
const breakpoints = {
  small: '@media (min-width: 480px)',
  medium: '@media (min-width: 800px)',
  large: '@media (min-width: 1024px)',
  huge: '@media (min-width: 1600px)',
}
```

Hence the following markup will render CSS equivalent to the code below.

`<Box width={[100,200, 500]}>`

```noeditor
.box {
  width: 100px
}

@media (min-width: 800px) {
  .box {
    width: 200px
  }
}

@media (min-width: 1024px) {
  .box {
    width: 500px
  }
}
```

### Baseline Grid

Some values are based on the baseline grid which is 4px by default.<br>
They will multiply with that value, thus padding `2` will result in `8px`.

Props based on that are:

- padding
- paddingLeft
- paddingRight
- paddingTop
- paddingBottom
- margin
- marginLeft
- marginRight
- marginTop
- marginBottom
- gap

### Extending Styles

Many core components take a `extend` prop that allows for style extension.<br>
It accepts a style object that can be consumed by fela.

> **Caution**: Extending styles will overwrite passed style props.

```jsx
<Box
  padding={10}
  extend={{
    backgroundColor: 'blue',
    color: 'white',
    ':hover': { backgroundColor: 'red' },
  }}>
  Hello
</Box>
```
