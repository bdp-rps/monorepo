import * as React from 'react'
import { El, Box, Text, IconButton, IconTrash } from '@bdp-rps/ui'

const DataPoint = ({ data }) => {
  return (
    <El as="td">
      <Box padding={1}>
        <Text>{data || '-'}</Text>
      </Box>
    </El>
  )
}

const DataRow = ({ data, onDelete }) => {
  let { duration, description, material, responsibility, id } = data
  return (
    <El as="tr">
      <DataPoint data={`${duration} Minuten`} />
      <DataPoint data={description} />
      <DataPoint data={material} />
      <DataPoint data={responsibility} />
      <El as="td" alignItems="flex-start">
        <Box padding={1} alignSelf="flex-start" width="100%">
          <IconButton
            icon={(props) => <IconTrash {...props} />}
            iconSize={16}
            onClick={() => onDelete(id)}
          />
        </Box>
      </El>
    </El>
  )
}

const TableHeader = ({ children }) => {
  return (
    <El as="th">
      <Box alignItems="flex-start" padding={1}>
        <Text>{children}</Text>
      </Box>
    </El>
  )
}

const Table = ({ children }) => {
  return (
    <El
      as="table"
      border="1"
      extend={{
        borderCollapse: 'collapse',
        borderColor: '#a0a0a0',
      }}>
      <El as="tr">
        <TableHeader>Zeit</TableHeader>
        <TableHeader>Programmpunkt</TableHeader>
        <TableHeader>Material</TableHeader>
        <TableHeader>Verantwortlich</TableHeader>
        <TableHeader>Löschen</TableHeader>
      </El>
      {children}
    </El>
  )
}
export default ({ data, onDelete }) => {
  return (
    <Table>
      {data.map((data) => (
        <DataRow data={data} onDelete={onDelete} />
      ))}
    </Table>
  )
}
