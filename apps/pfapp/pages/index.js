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
      <Box
        direction="row"
        space={2}
        alignItems="center"
        extend={{ overflow: 'hidden' }}>
        <Box width={36} height={36} flex="none">
          {GroupType.toIcon(groupType, 24)}
        </Box>
        <Box flex={1}>
          <Text color="blue">{title}</Text>
          <Text variant="note">{description}</Text>
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

export default function Page({ activities }) {
  return (
    <Template>
      <Layout paddingTop={4}>
        <ActivityList activities={activities} />
      </Layout>
    </Template>
  )
}

export async function getServerSideProps({ query }) {
  const activities = await getActivities()
  return {
    props: {
      activities: activities.data,
    },
  }
}
