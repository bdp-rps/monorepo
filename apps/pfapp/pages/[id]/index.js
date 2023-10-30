import React, { useState } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Card,
  Grid,
  Button,
  useTheme,
  useField,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ActivityTable from '../../components/ActivityTable'

import { getActivities } from '../../api/getActivities'
import { getActivity } from '../../api/getActivity'

import Location from '../../utils/location'
import GroupType from '../../utils/groupType'
import Season from '../../utils/season'
import Size from '../../utils/size'

const DataRow = ({ lable, value }) => {
  return (
    <Box
      direction="row"
      justifyContent="space-between"
      bg="lightGrey"
      padding={2}>
      <Text variant="note">{lable}: </Text>
      <Text variant="note">{value != '' ? value : '-'}</Text>
    </Box>
  )
}

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
  activity_slots,
}) {
  const activitySlots = activity_slots.data
  const data = activitySlots.map((activitySlot) => activitySlot.attributes)
  return (
    <>
      <Header />
      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" paddingTop={6} paddingBottom={25} space={8}>
            <Box direction="row" space={4}>
              <Text variant="title">{title}</Text>
              {GroupType.toIcon(groupType, 36)}
            </Box>
            <Text>{description}</Text>
            <Box direction={['columns', 'row']} space={2}>
              <Box flex={1}>
                <Card>
                  <Box space={2}>
                    <Text variant="category">Mehr Informationen:</Text>
                    <Grid columns={['1fr', '1fr 1fr']} gap={2}>
                      <DataRow lable="Größe" value={Size.toText(size)} />
                      <DataRow lable="Ort" value={Location.toText(location)} />
                      <DataRow
                        lable="Jahreszeit"
                        value={Season.toText(season)}
                      />
                      <DataRow lable="Vorbereitungsdauer" value={preperation} />
                      <DataRow lable="Idee" value={creator} />
                      <DataRow lable="Hochgeladen von" value={uploadedBy} />
                    </Grid>
                  </Box>
                </Card>
              </Box>
              {notes != '' && (
                <Box flex={1}>
                  <Card>
                    <Box size={2}>
                      <Text variant="category">Notizen:</Text>
                      <Box alignItems="center" alignSelf="center">
                        <Text>{notes}</Text>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              )}
            </Box>
            <Card>
              <Box space={2}>
                <Text variant="category">Zeitplan:</Text>
                <ActivityTable data={data} />
              </Box>
            </Card>
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

  return {
    props: data,
  }
}
