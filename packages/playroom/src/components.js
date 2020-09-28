import React, { useState } from 'react'

export {
  Box,
  Button,
  Card,
  Checkbox,
  Col,
  Grid,
  Link,
  List,
  ListItem,
  Loading,
  Modal,
  NavBar,
  NavBarItem,
  Radio,
  Row,
  ScrollView,
  SelectInput,
  Spacer,
  TabNav,
  TabNavItem,
  Text,
  TextArea,
  TextInput,
  Tile,
  Toggle,
} from '@bdp-rps/ui'

export function PlayroomState({ defaultValue, children }) {
  const [state, setState] = useState(defaultValue)
  return children({ state, setState })
}
