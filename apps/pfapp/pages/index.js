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

const usePagination = (totalItems, itemsPerPage, totalPages) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const [page, setPage] = useState(currentPage)

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
      { shallow: false }
    )
  }

  return { page: currentPage, totalPages, handlePageChange }
}

function Pagination({ page, totalPages, handlePageChange }) {
  return (
    <Box direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}>
          Zurück
        </Button>
      </Box>
      <Text>
        Seite {page} von {totalPages}
      </Text>
      <Box>
        <Button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}>
          Weiter
        </Button>
      </Box>
    </Box>
  )
}

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
    <Box space={2}>
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

export default function Page({ activities, pagination }) {
  const { page, totalPages, handlePageChange } = usePagination(
    pagination.total,
    pagination.pageSize,
    pagination.pageCount
  )

  return (
    <Template>
      <Layout paddingVertical={4} space={4}>
        <ActivityList activities={activities} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Layout>
    </Template>
  )
}

export async function getServerSideProps({ query }) {
  const { page = 1 } = query
  const activities = await getActivities(page)

  return {
    props: {
      activities: activities.data,
      pagination: activities.meta.pagination,
    },
  }
}
