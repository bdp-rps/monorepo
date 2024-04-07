import React from 'react'
import { Box, Text } from '@bdp-rps/ui'
import BlogLayout from '../../../../components/BlogLayout'

import { getBlogpostMainz } from '../../../../api/getBlogPost'

export default function Page({ blogpost }) {
  const { image, title, text, subtitle, publish, author } =
    blogpost.data.attributes
  const date = new Date(publish)
  return (
    <BlogLayout
      image={image.data.attributes.url}
      meta={{
        title,
        teaser: 1,
        description: subtitle,
        author: {
          name: author,
        },
        date: {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate(),
        },
      }}>
      {text}
    </BlogLayout>
  )
}

export async function getServerSideProps({ params }) {
  const blogpost = await getBlogpostMainz(params.id)

  return {
    props: {
      blogpost,
      id: params.id,
    },
  }
}
