import * as React from 'react'
import {
  Box,
  Button,
  TextInput,
  TextArea,
  Text,
  useField,
  useForm,
  SelectInput,
  Card,
  Spacer,
  El,
  IconButton,
  IconTrash,
  useScrollBlockingOverlay,
  Modal,
  Radio,
} from '@bdp-rps/ui'

import Location from '../utils/location'
import Duration from '../utils/duration'
import GroupType from '../utils/groupType'
import Size from '../utils/size'
import Season from '../utils/season'
import ActivityTable from './ActivityTable'
import postActivity from '../api/postActivity'
import postActivitySlots from '../api/postActivitySlots'
import axios from 'axios'
import { IconPlus } from '@bdp-rps/ui/lib/components/icons'

const FileInput = ({ handleFileChange }) => {
  return (
    <Box direction="row" space={1} alignItems="center">
      <Box>
        <input type="file" onChange={handleFileChange} />
      </Box>
    </Box>
  )
}

const InfoBox = ({ info }) => {
  const show =
    typeof value === 'string'
      ? value
      : typeof value === 'number'
      ? value > 0
      : true

  return (
    show && (
      <Box alignItems="center" justifyContent="center">
        <Box
          border="1 px solid"
          bg="blueLight"
          extend={{
            boxShadow: '0 0 4px rgba(0,0,0,0.2)',
            flex: '0 0 auto',
            borderRadius: 22,
          }}
          paddingVertical={1}
          padding={2}>
          <Text color="white">{info}</Text>
        </Box>
      </Box>
    )
  )
}

const MaterialInput = ({ field }) => {
  const [materials, setMaterials] = React.useState((_) => null)
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)

  return (
    <>
      <Modal
        title="Material hinzufügen"
        visible={modalVisible}
        zIndex={10}
        onClose={() => setModalVisible(false)}>
        <Box space={2} padding={2} minWidth={350}>
          <TextInput />
          <Box>
            <Button>Hinzufügen</Button>
          </Box>
        </Box>
      </Modal>
      <Box alignItems="start" justifyContent="space-between" space={2}>
        <Text variant="label">Materialien</Text>
        <Box direction="row" alignItems="center" space={2}>
          <Box>
            <Button
              variant="secondary"
              onClick={() => setModalVisible(true)}
              icon={(props) => <IconPlus {...props} />}>
              Hinzufügen
            </Button>
          </Box>
          {materials?.map((material) => {
            return <InfoBox info={material} />
          })}
        </Box>
      </Box>
    </>
  )
}

const TimeSlotForm = ({ onAdd }) => {
  const duration = useField({
    name: 'duration',
    required: true,
  })
  const description = useField({
    name: 'description',
    required: true,
  })
  const materials = useField({
    name: 'materials',
  })
  const responsibility = useField({
    name: 'responsibility',
  })

  const { submit, reset } = useForm(
    duration,
    description,
    materials,
    responsibility
  )

  return (
    <Box space={4}>
      <Text variant="category">Zeitblock hinzufügen</Text>
      <Box
        as="form"
        noValidate
        space={4}
        onSubmit={(e) => {
          e.preventDefault()
          submit((isValid, data) => {
            if (isValid) {
              onAdd(data)
              reset()
            }
          })
        }}>
        <TextArea label="Beschreibung" {...description.props} />
        <MaterialInput />
        <TextArea label="Materialien" {...materials.props} />
        <Box direction="row" space={2}>
          <Box flex={2}>
            <TextInput label="Verantwortlichkeit" {...responsibility.props} />
          </Box>
          <Box flex={1}>
            <SelectInput
              type="number"
              label="Dauer des Zeitblocks (in min)"
              {...duration.props}>
              <option value={' '}> </option>
              {Duration.values.map((duration) => (
                <option value={duration} key={duration}>
                  {duration}
                </option>
              ))}
            </SelectInput>
          </Box>
        </Box>
        <Box alignSelf="flex-start" space={2} direction="row">
          <Button type="submit">Hinzufügen</Button>
          <Button type="reset" variant="secondary">
            Zurücksetzen
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default () => {
  const title = useField({
    name: 'title',
    required: true,
  })
  const description = useField({
    name: 'description',
    required: true,
  })
  const location = useField({
    name: 'location',
  })
  const groupType = useField({
    name: 'groupType',
    value: GroupType.values[0],
    required: true,
  })
  const size = useField({
    name: 'size',
  })
  const season = useField({
    name: 'season',
  })
  const notes = useField({
    name: 'notes',
  })
  const preperation = useField({
    name: 'preperation',
    default: 0,
  })
  const uploadedBy = useField({
    name: 'uploadedBy',
  })
  const creator = useField({
    name: 'creator',
  })

  const { submit, reset } = useForm(
    title,
    description,
    location,
    season,
    groupType,
    size,
    preperation,
    creator,
    uploadedBy,
    notes
  )

  const [timeSlots, setTimeSlots] = React.useState([])

  //TODO: move this to useForm somehow the changes are not applied for me
  // too stupid
  const [isLoading, setIsLoading] = React.useState(false)
  // const [attachmentId, setAttachmentId] = React.useState(null)

  const [file, setFile] = React.useState()
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleFileUpload = () => {
    if (file) {
      const formData = new FormData()
      formData.append('files', file)

      return axios
        .post('https://docs.bdp-rps.de/api/upload', formData)
        .then((response) => {
          return response
        })
        .catch((error) => {
          //TODO: Proper error handling
          console.error('File upload error:', error)
        })
    }
  }

  return (
    <Box paddingVertical={4}>
      <Box
        as="form"
        noValidate
        space={4}
        onSubmit={(e) => {
          e.preventDefault()
          submit(async (isValid, data) => {
            if (isValid) {
              setIsLoading((_) => true)
              //TODO: Separate the different uploads
              //in functions to make it more readable and maintainable

              const fileResponse = await handleFileUpload()

              const fileId = fileResponse.data[0].id

              const postActivitySlotsPromises = timeSlots.map((timeSlot) => {
                const { duration, description, materials, responsibility } =
                  timeSlot
                return postActivitySlots({
                  duration,
                  description,
                  materials,
                  responsibility,
                }).then((res) => res.json())
              })
              const activitySlots = await Promise.all(postActivitySlotsPromises)
              const activitySlotIds = activitySlots.map((res) => res.data.id)

              const {
                creator,
                description,
                groupType,
                location,
                notes,
                preperation,
                size,
                title,
                uploadedBy,
                season,
              } = data
              //TODO: Try catch for error handling
              //TODO maybe move the whole logic of not sending stuff if its empty to the api file
              const result = await postActivity({
                creator,
                description,
                groupType,
                location: location != '' ? location : undefined,
                size: size != '' ? size : undefined,
                season: season != '' ? season : undefined,
                notes,
                attachment: fileId ? [fileId] : undefined,
                preperation: preperation != '' ? preperation : undefined,
                title,
                uploadedBy,
                activity_slots: activitySlotIds,
              }).then((activity) => activity.json())
              setTimeSlots((_) => [])
              setIsLoading((_) => false)
              reset()
            }
          })
        }}>
        <TextInput label="Titel" {...title.props} />
        <TextArea label="Beschreibung" {...description.props} />
        <Box direction="row" space={2}>
          <SelectInput label="Ort" {...location.props}>
            <option value={undefined}>keine Angabe</option>
            {Location.values.map((location) => (
              <option value={location} key={location}>
                {Location.toText(location)}
              </option>
            ))}
          </SelectInput>
          <SelectInput label="Stufe" {...groupType.props}>
            {GroupType.values.map((type) => {
              return (
                <option value={type} key={type}>
                  {GroupType.toText(type)}
                </option>
              )
            })}
          </SelectInput>
          <SelectInput label="Gruppengröße" {...size.props}>
            <option value={undefined}>keine Angabe</option>
            {Size.values.map((size) => {
              return (
                <option key={size} value={size}>
                  {Size.toText(size)}
                </option>
              )
            })}
          </SelectInput>
          <SelectInput label="Jahreszeit" {...season.props}>
            <option value={undefined}>keine Angabe</option>
            {Season.values.map((season) => {
              return (
                <option value={season} key={season}>
                  {Season.toText(season)}
                </option>
              )
            })}
          </SelectInput>
        </Box>
        <TextArea label="Notizen" {...notes.props} />
        <TextInput
          label="Vorbereitungszeit (Minuten)"
          type="number"
          {...preperation.props}
        />
        <Box flex={1}>
          <FileInput handleFileChange={handleFileChange} />
        </Box>
        <Box direction="row" width="100%" space={2}>
          <Box flex={1}>
            <TextInput
              label="Wer ist so nett und erstellt diese Gruppenstunde?"
              {...uploadedBy.props}
            />
          </Box>
          <Box flex={1}>
            <TextInput label="Von wem ist die Idee?" {...creator.props} />
          </Box>
        </Box>
        <Box direction="row" space={6} justifyContent="space-between">
          <Box alignSelf="flex-start">
            <Button type="submit" loading={isLoading}>
              Gruppenstunde erstellen
            </Button>
          </Box>
          <Box space={1} alignItems="start">
            <InfoBox
              info={`Dauer: ${timeSlots.reduce((prev, current) => {
                return prev + parseInt(current.duration)
              }, 0)} min`}
            />
            <InfoBox
              info={`Material: ${timeSlots
                .map((timeSlot) => timeSlot.materials)
                .join(',')}`}
            />
          </Box>
        </Box>
      </Box>
      <Spacer size={10} />
      <Box space={4}>
        <Card>
          <TimeSlotForm
            onAdd={(data) =>
              setTimeSlots((timeSlots) => [
                ...timeSlots,
                { ...data, id: timeSlots.length + 1 },
              ])
            }
          />
        </Card>

        <ActivityTable
          data={timeSlots}
          onDelete={(id) =>
            setTimeSlots((timeSlots) =>
              timeSlots.filter((timeSlot) => timeSlot.id !== id)
            )
          }
        />
      </Box>
    </Box>
  )
}
