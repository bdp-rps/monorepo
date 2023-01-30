```jsx
import { IconAddress, IconBook, IconCalendar } from './'
;<Box direction="row" space={2}>
  <IconAddress />
  <IconBook />
  <IconCalendar />
</Box>
```

### Size

```jsx
import { IconCalendar } from './'
;<Box direction="row" space={2}>
  <IconCalendar size={20} />
  <IconCalendar size={30} />
  <IconCalendar size={40} />
</Box>
```

### Coloring

```jsx
import { IconCalendar } from './'
;<Box direction="row" space={2}>
  <IconCalendar size={30} fill="yellow" />
  <IconCalendar size={30} fill="red" />
  <IconCalendar size={30} fill="rebeccapurple" />
</Box>
```

### All Icons

```jsx noeditor
import * as Icons from './'
;<Box direction="row" wrap="wrap">
  {Object.keys(Icons)
    .filter((icon) => icon.indexOf('Icon') === 0)
    .map((icon) => {
      const Icon = require('./')[icon]

      return (
        <Box
          alignItems="center"
          justifyContent="center"
          space={2}
          width={[
            'calc(50% - 8px)',
            'calc(33.33% - 8px)',
            'calc(25% - 2 * 8px)',
          ]}
          padding={3}
          margin={2}
          extend={{
            border: '1px solid black',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <Icon size={30} />
          {icon}
        </Box>
      )
    })}
</Box>
```
