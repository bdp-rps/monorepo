import * as React from 'react'
import { useTheme, Grid } from '@bdp-rps/ui'

import Layout from '../../../components/Layout'
import Template from '../../../components/Template'
import CourseAnnouncementTile from '../../../components/CourseAnnouncementTile.js'
import getCourseAnnouncements from '../../../api/getCourseAnnouncements.js'

export default ({ courses }) => {
  const theme = useTheme()

  return (
    <Template>
      <Layout
        paddingTop={10}
        paddingBottom={20}
        extend={{ backgroundColor: 'rgb(240, 240, 240)' }}>
        <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
          {courses?.map((course) => (
            <CourseAnnouncementTile key={course.id} {...course} />
          ))}
        </Grid>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const courses = await getCourseAnnouncements()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      courses: courses?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
