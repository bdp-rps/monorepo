A navigation pattern for sub pages.<br>
Requires `<TabNavItem>` as descendents.

### Basic Usage

```jsx
<TabNav>
  <TabNavItem id="meute" active>
    Meute
  </TabNavItem>
  <TabNavItem id="sippe">Sippe</TabNavItem>
</TabNav>
```

### Controlled

```jsx
const [activeTab, setActiveTab] = React.useState('meute')

;<Box>
  <TabNav onChange={setActiveTab}>
    <TabNavItem id="meute" active={activeTab === 'meute'}>
      Meute
    </TabNavItem>
    <TabNavItem id="sippe" active={activeTab === 'sippe'}>
      Sippe
    </TabNavItem>
    <TabNavItem id="rr" disabled>
      RR
    </TabNavItem>
  </TabNav>
  <Box padding={10} extend={{ backgroundColor: 'rgb(240, 240, 240)' }}>
    {activeTab === 'meute' ? 'Meute' : null}
    {activeTab === 'sippe' ? 'Sippe' : null}
  </Box>
</Box>
```
