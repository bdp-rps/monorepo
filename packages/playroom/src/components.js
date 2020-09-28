import React, { useState } from 'react'
// export Box from '@bdp-rps/ui/lib/components/box'
// export Button from '@bdp-rps/ui/lib/components/button'
// export Card from '@bdp-rps/ui/lib/components/card'
// export Checkbox from '@bdp-rps/ui/lib/components/checkbox'
// export Col from '@bdp-rps/ui/lib/components/col'
// export Fixed from '@bdp-rps/ui/lib/components/fixed'
// export Grid from '@bdp-rps/ui/lib/components/grid'
// export Link from '@bdp-rps/ui/lib/components/link'
// export List from '@bdp-rps/ui/lib/components/list'
// export ListItem from '@bdp-rps/ui/lib/components/listItem'
// export Loading from '@bdp-rps/ui/lib/components/loading'
// export Modal from '@bdp-rps/ui/lib/components/modal'
// export NavBar from '@bdp-rps/ui/lib/components/navBar'
// export NavBarItem from '@bdp-rps/ui/lib/components/navBarItem'
// export Radio from '@bdp-rps/ui/lib/components/radio'
// export Row from '@bdp-rps/ui/lib/components/row'
// export ScrollView from '@bdp-rps/ui/lib/components/scrollView'
// export SelectInput from '@bdp-rps/ui/lib/components/selectInput'
// export Spacer from '@bdp-rps/ui/lib/components/spacer'
// export TabNav from '@bdp-rps/ui/lib/components/tabNav'
// export TabNavItem from '@bdp-rps/ui/lib/components/tabNavItem'
// export Text from '@bdp-rps/ui/lib/components/text'
// export TextArea from '@bdp-rps/ui/lib/components/textArea'
// export TextInput from '@bdp-rps/ui/lib/components/textInput'
// export Tile from '@bdp-rps/ui/lib/components/tile'
// export Toggle from '@bdp-rps/ui/lib/components/toggle'

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
