import React, { useState } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Button,
  useTheme,
  useField,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getActivities } from '../../api/getActivities'
import { getActivity } from '../../api/getActivity'

import Location from '../../utils/location'
import GroupType from '../../utils/groupType'
import Season from '../../utils/season'

export default function Page({
  title,
  description,
  location,
  season,
  groupType,
  size,
  preperation,
  creator,
  uploadedBy,
  notes,
}) {
  return (
    <>
      <Header />
      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" paddingTop={6} paddingBottom={25} space={2}>
            <Text variant="title">{title}</Text>
            <Text>{description}</Text>
            {notes != '' && (
              <>
                <Text variant="category">Notizen:</Text>
                <Text>{notes}</Text>
              </>
            )}
            <Text variant="category">Mehr Informationen:</Text>
            {location && <Text>{Location.toText(location)}</Text>}
            {preperation && (
              <Text>{`Vorbereitungsdauer sind ${preperation} minuten`}</Text>
            )}
            {size && <Text>{`Größe: ${size}`}</Text>}
            {location && <Text>{Location.toText(location)}</Text>}
            {season && <Text>{Season.toText(location)}</Text>}
            {GroupType.toIcon(groupType, 32)}
          </Box>
        </Layout>
      </Box>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const activities = await getActivities()
  const ids = activities.data.map((activity) => activity.id)
  return {
    fallback: false,
    paths: ids.map((id) => ({
      params: {
        id: id.toString(),
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const activity = await getActivity(params.id)
  const data = activity.data.attributes
  console.log(activity)

  return {
    props: data,
  }
}
