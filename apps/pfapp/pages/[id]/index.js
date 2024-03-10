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
      bg="blueLighter"
      padding={2}>
      <Box alignSelf="center">
        <Text variant="note" color="white">
          {lable}:{' '}
        </Text>
      </Box>
      <Text color="white">{value != undefined ? value : '-'}</Text>
    </Box>
  )
}

export default function Page({ activitySlots, activity }) {
  // const activitySlots = activity_slots.data
  // const materials = data.map((timeSlot) => timeSlot.materials).join(',')
  const {
    attachment,
    title,
    description,
    location,
    season,
    groupType,
    size,
    preperation,
    uploadedBy,
  } = activity
  return (
    <>
      <Header />
      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" paddingTop={6} paddingBottom={25} space={6}>
            <Box direction="row" space={4}>
              <Text variant="title">{title}</Text>
              {GroupType.toIcon(groupType, 36)}
            </Box>
            <Card>
              <Text>{description}</Text>
            </Card>
            <Card>
              <Box space={2}>
                <Text variant="category">Zeitplan:</Text>
                {/* <ActivityTable data={data} /> */}
              </Box>
            </Card>
            <Box direction={['column', 'row']} space={2}>
              <Box flex={1}>
                <Card>
                  <Box space={2}>
                    <Text variant="category">Mehr Informationen:</Text>
                    <Grid columns={['1fr', '1fr 1fr']} gap={2}>
                      <DataRow lable="Größe" value={Size.toText(size)} />
                      <DataRow lable="Ort" value={Location.toText(location)} />
                      <DataRow lable="Vorbereitungsdauer" value={preperation} />
                      <DataRow
                        lable="Jahreszeit"
                        value={Season.toText(season)}
                      />
                      <DataRow lable="Hochgeladen von" value={uploadedBy} />
                    </Grid>
                  </Box>
                </Card>
              </Box>

              <Box flex={1} space={2}>
                {/* TODO: */}
                {/* {materials && (
                  <Card>
                    <Box space={2}>
                      <Text variant="category">Materialien:</Text>
                      <Box alignItems="start">
                        <Text>{materials}</Text>
                      </Box>
                    </Box>
                  </Card>
                )} */}

                {attachment.data != null && (
                  <Card>
                    <Box space={2}>
                      <Text>
                        Diese Gruppenstunde hat wohl ein paar Dateien angehängt.
                        Das können Bilder, pdfs oder sonst was sein. Klick auf
                        den Button um sie zu öffnen.
                      </Text>
                      <Button
                        target="_blank"
                        href={`https://docs.bdp-rps.de${attachment.data[0].attributes.url}`}>
                        Anhang öffnen
                      </Button>
                    </Box>
                  </Card>
                )}
              </Box>
            </Box>
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
  const activityData = await getActivity(params.id)
  const activity = activityData.data.attributes

  const activitySlots = activity.activity_slots.data.map(
    ({ id, attributes }) => {
      return {
        id: id,
        title: attributes.title || '',
        description: attributes.description,
      }
    }
  )

  const props = {
    activity,
    activitySlots,
  }

  console.log(props)

  return {
    props,
  }
}
