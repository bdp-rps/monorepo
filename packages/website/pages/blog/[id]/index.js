import React from 'react'
import { Box, Text } from '@bdp-rps/ui'
import BlogLayout from '../../../components/BlogLayout'

import getBlogposts from '../../../api/getBlogposts'
import getBlogpost from '../../../api/getBlogPost'

export default function Page({ blogpost }) {
  const { image, title, text, subtitle, publish, author } =
    blogpost.data.attributes

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
        date: { year: 2022, month: 4, day: 10 },
      }}>
      <Text>{text}</Text>
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const blogposts = await getBlogposts()

  return {
    fallback: false,
    paths:
      blogposts.data.map((blogpost) => ({
        params: {
          id: String(blogpost.id),
        },
      })) || [],
  }
}

export async function getStaticProps({ params }) {
  const blogpost = await getBlogpost(params.id)

  return {
    props: {
      blogpost,
      id: params.id,
    },
  }
}
