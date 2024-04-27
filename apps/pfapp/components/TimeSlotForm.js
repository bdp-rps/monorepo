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

export default function TimeSlotForm({
  onSave,
  onCancel,
  defaultValues = { title: '', description: '' },
}) {
  const description = useField({
    name: 'description',
    required: true,
    value: defaultValues.description,
  })

  const timeSlotTitle = useField({
    name: 'title',
    required: true,
    value: defaultValues.title,
  })

  const { submit, reset } = useForm(description, timeSlotTitle)

  return (
    <Box space={4}>
      <Box
        noValidate
        space={4}
        onReset={(_) => {
          reset()
        }}>
        <Box flex={2}>
          <TextInput label="Titel" {...timeSlotTitle.props} />
        </Box>
        <TextArea label="Beschreibung" {...description.props} />
        <Box alignSelf="flex-start" space={2} direction="row">
          <Button
            onClick={(e) => {
              submit((isValid, data) => {
                if (isValid) {
                  onSave(data)
                  reset()
                }
              })
            }}>
            Speichern
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            Abbrechen
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
