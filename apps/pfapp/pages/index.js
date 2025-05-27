import React, { useState, useMemo } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Button,
  useTheme,
  useField,
  IconLilie,
  SelectInput,
  Checkbox,
} from '@bdp-rps/ui'
import { useRouter } from 'next/router'

import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import Template from '../components/Template'
import GroupType from '../utils/groupType'

import { getActivities } from '../api/getActivities'

function ActivityListItem({ id, title, description, groupType }) {
  return (
    <ListItem href={'/' + id}>
      <Box direction="row" space={2} alignItems="center">
        {GroupType.toIcon(groupType, 24)}
        <Box>
          <Text color="blue">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </Box>
    </ListItem>
  )
}

function ActivityList({ activities }) {
  return (
    <Box minHeight="95vh" paddingTop={4} paddingBottom={15} space={2}>
      <Box>
        {activities.map((activity) => (
          <ActivityListItem
            key={activity.id}
            id={activity.id}
            {...activity.attributes}
            name={activity.id}
          />
        ))}
      </Box>
    </Box>
  )
}

export function useFilter({ defaults = {} } = {}) {
  const router = useRouter()
  const query = router.query

  const filters = useMemo(() => {
    return {
      ...defaults,
      ...query,
    }
  }, [query, defaults])

  const setFilter = (key, value) => {
    const newQuery = { ...router.query, [key]: value }
    if (!value) delete newQuery[key]

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    )
  }

  const removeFilter = (key) => {
    const newQuery = { ...router.query }
    delete newQuery[key]

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    )
  }

  const resetFilters = () => {
    router.push(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      { shallow: true }
    )
  }

  const isFiltering = Object.keys(query).length > 0

  return {
    filters,
    setFilter,
    removeFilter,
    resetFilters,
    isFiltering,
  }
}
const CheckboxGroup = ({ options, label, toText, selected, setSelected }) => {
  return (
    <Box space={4}>
      <Text variant="label">{label}</Text>
      <Box direction="row" wrap="wrap" extend={{ gap: 8 }}>
        {options.map((option) => (
          <Checkbox
            key={option}
            label={toText(option)}
            checked={selected.includes(option)}
            onChange={() => setSelected((prev) => [...prev, option])}
          />
        ))}
      </Box>
    </Box>
  )
}
export default function Page({ activities }) {
  const { filters, setFilter, removeFilter, resetFilters, isFiltering } =
    useFilter()
  const [selected, setSelected] = useState([])
  return (
    <Template>
      <Layout paddingTop={4}>
        <Box space={4}>
          <Text variant="category">Filter</Text>
          <CheckboxGroup
            options={GroupType.values}
            toText={GroupType.toText}
            onChange={(value) => setFilter('groupType', value)}
            label="Stufe"
          />
        </Box>
        <ActivityList activities={activities} />
      </Layout>
    </Template>
  )
}

export async function getServerSideProps({ query }) {
  const filters = {}
  console.log(query)
  const activities = await getActivities(filters)
  return {
    props: {
      activities: activities.data,
    },
  }
}
