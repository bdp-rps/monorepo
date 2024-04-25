import React from 'react'
import {
  Box,
  Text,
  Card,
  useTheme,
  IconTrash,
  IconButton,
  IconPencil,
  Button,
  Icon,
} from '@bdp-rps/ui'

import TimeSlotForm from './TimeSlotForm'

export default function TimeSlotCard({ onEdit, title, description, onDelete }) {
  const theme = useTheme()
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <Box flex="1">
      <Card
        extend={{
          border: '1px solid',
          borderColor: theme.tokens.inputBorder,
        }}>
        {isEditing ? (
          <TimeSlotForm
            onCancel={() => setIsEditing(false)}
            onSave={(data) => {
              console.log(data)
              onEdit(data)
              setIsEditing(false)
            }}
            defaultValues={{ title, description }}
          />
        ) : (
          <Box space={4}>
            <Box
              alignItems="center"
              direction="row"
              justifyContent="space-between">
              <Box
                alignItems="center"
                direction="row"
                justifyContent="space-between">
                <Box width="200">
                  <Text
                    extend={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    variant="category">
                    {title}
                  </Text>
                </Box>
                {!isEditing && (
                  <IconButton
                    icon={(props) => <IconPencil {...props} />}
                    onClick={(_) => setIsEditing((prev) => !prev)}
                  />
                )}
              </Box>
              <IconButton
                icon={(props) => <IconTrash {...props} />}
                onClick={onDelete}
              />
            </Box>
            <Box space="2">
              <Text variant="category">Beschreibung</Text>
              <Box>
                <Text>{description}</Text>
              </Box>
            </Box>
          </Box>
        )}
      </Card>
    </Box>
  )
}
