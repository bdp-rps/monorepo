import * as React from 'react'
import {
  Box,
  Button,
  TextInput,
  TextArea,
  useField,
  useForm,
  SelectInput,
} from '@bdp-rps/ui'

export default function TimeSlotForm({ onAdd }) {
  const description = useField({
    name: 'description',
    required: true,
  })

  const timeSlotTitle = useField({
    name: 'title',
  })

  const { submit, reset } = useForm(description, timeSlotTitle)

  return (
    <Box space={4}>
      <Box
        as="form"
        noValidate
        space={4}
        onReset={(_) => {
          reset()
        }}
        onSubmit={(e) => {
          e.preventDefault()
          submit((isValid, data) => {
            if (isValid) {
              onAdd(data)

              reset()
            }
          })
        }}>
        <Box flex={2}>
          <TextInput label="Titel" {...timeSlotTitle.props} />
        </Box>
        <TextArea label="Beschreibung" {...description.props} />

        <Box alignSelf="flex-start" space={2} direction="row">
          <Button type="submit">Speichern</Button>
          <Button type="reset" variant="secondary">
            Zurücksetzen
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
