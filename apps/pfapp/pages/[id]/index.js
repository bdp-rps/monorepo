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

import { getActivities } from '../../api/getActivities'
import { getActivity } from '../../api/getActivity'

import Location from '../../utils/location'
import GroupType from '../../utils/groupType'
import Season from '../../utils/season'
import Size from '../../utils/size'
import TimeSlotCard from '../../components/TimeSlotCard'

const DataRow = ({ lable, value }) => {
  return (
    <Box>
      <Box>
        <Text variant="note">{lable} </Text>
      </Box>
      <Text>{value != undefined ? value : '-'}</Text>
    </Box>
  )
}

export default function Page({ activitySlots, activity, materials }) {
  console.log(activity, activitySlots, materials)
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
            {activity.material ? (
              <Box flex={1}>
                <Card>
                  <Box space={2}>
                    <Text variant="category">Materialien:</Text>
                    <Text>
                      {activity.material?.map(({ name }) => name).join(', ')}
                    </Text>
                  </Box>
                </Card>
              </Box>
            ) : null}
            <Box space={2}>
              <Text variant="category">Zeitplan:</Text>
              <Box
                direction={['column', 'row']}
                wrap="wrap"
                extend={{ gap: 8 }}>
                {activitySlots.map((slot, index) => (
                  <Box flex="1" key={index}>
                    <TimeSlotCard position={index + 1} {...slot} />
                  </Box>
                ))}
              </Box>
            </Box>
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
    fallback: 'blocking',
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

  return {
    props,
  }
}
