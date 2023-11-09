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

const FileInput = (setAttachmentId, attachmentId) => {
  const [file, setFile] = React.useState()
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleUpload = () => {
    if (file) {
      const formData = new FormData()
      formData.append('files', file)
      console.log(formData)

      // You can make an Axios request to upload the file to your server.
      // Replace 'YOUR_UPLOAD_URL' with your actual server endpoint.
      axios
        .post('https://docs.bdp-rps.de/api/upload', formData)
        .then((response) => {
          // Handle success
          console.log('File uploaded successfully:', response.data)
        })
        .catch((error) => {
          // Handle error
          console.error('File upload error:', error)
        })
    }
  }

  return (
    <Box direction="row" space={1} alignItems="center">
      <Box>
        <input type="file" onChange={handleFileChange} />
      </Box>
      <Box>
        <Button onClick={handleUpload} disabled={!file}>
          Upload
        </Button>
      </Box>
    </Box>
  )
}

const InfoBox = ({ label, value }) => {
  const string = `${label} ${value}`

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
          <Text color="white">{string}</Text>
        </Box>
      </Box>
    )
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
        <TextArea
          label="Beschreibung"
          placeholder="Eine flotte Beschreiung was hier passiert"
          {...description.props}
        />
        <TextArea
          label="Materialien"
          placeholder="Welche Materialien werden hier benötigt?"
          {...materials.props}
        />
        <Box direction="row" space={2}>
          <Box flex={2}>
            <TextInput
              label="Verantwortlichkeit"
              placeholder="wer ist hier verantwortlich?"
              {...responsibility.props}
            />
          </Box>
          <Box flex={1}>
            <SelectInput
              type="number"
              label="Dauer des Zeitblocks"
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
  const [attachmentId, setAttachmentId] = React.useState(null)

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
                attachment,
              } = data
              //TODO: Try catch for error handling
              const result = await postActivity({
                creator,
                description,
                groupType,
                location: location != '' ? location : undefined,
                size: size != '' ? size : undefined,
                season: season != '' ? season : undefined,
                notes,
                attachment,
                preperation,
                title,
                uploadedBy,
                activity_slots: activitySlotIds,
              }).then((activity) => activity.json())
              setTimeSlots((_) => [])
              reset()
            }
          })
        }}>
        <TextInput
          label="Titel"
          placeholder="Gib deiner Gruppenstunde einen coolen namen"
          {...title.props}
        />
        <TextArea
          label="Beschreibung"
          placeholder="Einmal flott um was es geht"
          {...description.props}
        />
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
        <TextArea
          label="Notizen"
          placeholder="Falls es ein paar Besonderheiten gibt pack diese gerne hier rein"
          {...notes.props}
        />
        <TextInput
          label="Vorbereitungszeit (Minuten)"
          type="number"
          placeholder="Die Minuten die es etwa braucht um die Gruppenstunde vorzubereiten"
          {...preperation.props}
        />
        <Box flex={1}>
          <FileInput
            setAttachmentId={setAttachmentId}
            attachmentId={attachmentId}
          />
        </Box>
        <Box direction="row" width="100%" space={2}>
          <Box flex={1}>
            <TextInput
              label="Wer ist so nett und erstellt diese Gruppenstunde?"
              placeholder="Die Minuten die es etwa braucht um die Gruppenstunde vorzubereiten"
              {...uploadedBy.props}
            />
          </Box>
          <Box flex={1}>
            <TextInput
              label="Von wem ist die Idee?"
              placeholder="Falls nicht der ersteller dafür verantwortlich ist :)"
              {...creator.props}
            />
          </Box>
        </Box>
        <Box direction="row" space={6} justifyContent="space-between">
          <Box alignSelf="flex-start">
            <Button type="submit">Gruppenstunde erstellen</Button>
          </Box>
          <Box space={1} alignItems="start">
            <InfoBox
              value={`${timeSlots.reduce((prev, current) => {
                return prev + parseInt(current.duration)
              }, 0)} min`}
              label="Dauer:"
            />
            <InfoBox
              value={timeSlots.map((timeSlot) => timeSlot.materials).join(',')}
              label="Material:"
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
        {!timeSlots.length == 0 && (
          <ActivityTable
            data={timeSlots}
            onDelete={(id) =>
              setTimeSlots((timeSlots) =>
                timeSlots.filter((timeSlot) => timeSlot.id !== id)
              )
            }
          />
        )}
      </Box>
    </Box>
  )
}
