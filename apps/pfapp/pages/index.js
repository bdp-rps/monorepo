import React, { useState } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Button,
  useTheme,
  useField,
  IconLilie,
} from '@bdp-rps/ui'

import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import Template from '../components/Template'
import GroupType from '../utils/groupType'

import { getActivities } from '../api/getActivities'

function ActivityListItem({ id, title, description, groupType }) {
  return (
    <ListItem href={'/' + id}>
      <Box>
        <Box direction="row" space={2}>
          <Text color="blue">{title}</Text>
          {GroupType.toIcon(groupType, 24)}
        </Box>
        <Text>{description}</Text>
      </Box>
    </ListItem>
  )
}

function ActivityList({ activities }) {
  console.log(activities)
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
      <ActivityList activities={activities} />
    </Template>
  )
}

export async function getStaticProps() {
  const activities = await getActivities()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      activities: activities.data,
    },
  }
}
