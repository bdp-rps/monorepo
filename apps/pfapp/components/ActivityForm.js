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

import TimeSlotForm from './TimeSlotForm'

import Location from '../utils/location'
import GroupType from '../utils/groupType'
import Size from '../utils/size'
import Season from '../utils/season'
import TimeSlotCard from './TimeSlotCard'
import postActivity from '../api/postActivity'
import postActivitySlots from '../api/postActivitySlots'
import axios from 'axios'
import { IconMinus, IconPlus } from '@bdp-rps/ui/lib/components/icons'

const FileInput = ({ handleFileChange }) => {
  return (
    <Box direction="row" space={1} alignItems="center">
      <Box>
        <input type="file" onChange={handleFileChange} />
      </Box>
    </Box>
  )
}

const InfoBox = ({ children }) => {
  return (
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
        {children}
      </Box>
    </Box>
  )
}

const MaterialInput = ({ field, materials, setMaterials }) => {
  const [currentMaterialInput, setCurrentMaterialInput] = React.useState('')
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)

  const handleAddMaterial = () => {
    setMaterials((prev) => {
      return [...prev, currentMaterialInput]
    })
    setModalVisible(false)
  }

  React.useEffect(() => {
    field.update({ value: materials?.join(', ') })
  }, [materials])

  return (
    <>
      <Modal
        title="Material hinzufügen"
        visible={modalVisible}
        zIndex={10}
        onClose={() => setModalVisible(false)}>
        <Box space={2} padding={2} minWidth={350}>
          <TextInput
            onChange={(e) => setCurrentMaterialInput(e.target.value)}
          />
          <Box>
            <Button onClick={(_) => handleAddMaterial()}>Hinzufügen</Button>
          </Box>
        </Box>
      </Modal>
      <Box display="none">
        <TextArea label="Materialien" {...field.props} />
      </Box>
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
          <Box
            direction="row"
            wrap="wrap"
            flex="1"
            extend={{
              gap: 4,
            }}>
            {materials?.map((material, indexForDelete) => {
              return (
                <InfoBox key={indexForDelete}>
                  <Box direction="row" space={1} alignItems="center">
                    <Text color="white">{material}</Text>
                    <Box margin={-4}>
                      <IconButton
                        color="white"
                        onClick={(_) =>
                          setMaterials((materials) =>
                            materials.filter((_, index) => {
                              return index != indexForDelete
                            })
                          )
                        }
                        icon={(props) => <IconMinus {...props} />}
                      />
                    </Box>
                  </Box>
                </InfoBox>
              )
            })}
          </Box>
        </Box>
      </Box>
    </>
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

  const preperation = useField({
    name: 'preperation',
    default: 0,
  })
  const uploadedBy = useField({
    name: 'uploadedBy',
  })
  const materials = useField({
    name: 'materials',
  })

  const { submit, reset } = useForm(
    title,
    description,
    location,
    season,
    groupType,
    materials,
    size,
    preperation,
    uploadedBy
  )

  const defaultForTest = [
    {
      title: 'Loremo Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
  ]

  const [timeSlots, setTimeSlots] = React.useState((_) => [])

  //TODO: move this to useForm somehow the changes are not applied for me
  // too stupid
  const [isLoading, setIsLoading] = React.useState(false)
  // const [attachmentId, setAttachmentId] = React.useState(null)

  const timeslotsAreEmpty = timeSlots.length == 0

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

  const [materialsData, setMaterialsData] = React.useState([])
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)

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

              const fileResponse = file ? await handleFileUpload() : null

              const fileId = fileResponse?.data[0].id

              const postActivitySlotsPromises = timeSlots.map((timeSlot) => {
                const { description } = timeSlot
                return postActivitySlots({
                  description,
                  title,
                }).then((res) => res.json())
              })
              const activitySlots = await Promise.all(postActivitySlotsPromises)
              const activitySlotIds = activitySlots.map((res) => res.data.id)

              const {
                description,
                groupType,
                location,
                preperation,
                size,
                title,
                uploadedBy,
                season,
              } = data
              //TODO: Try catch for error handling
              //TODO maybe move the whole logic of not sending stuff if its empty to the api file
              const result = await postActivity({
                description,
                groupType,
                location: location != '' ? location : undefined,
                size: size != '' ? size : undefined,
                season: season != '' ? season : undefined,
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
        <TextInput
          label="Vorbereitungszeit (Minuten)"
          type="number"
          {...preperation.props}
        />
        <MaterialInput
          field={materials}
          materials={materialsData}
          setMaterials={setMaterialsData}
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
        </Box>
        <Box direction="row" space={6} justifyContent="space-between">
          <Box alignSelf="flex-start" space={2}>
            <Button
              type="submit"
              loading={isLoading}
              disabled={timeslotsAreEmpty}>
              Gruppenstunde erstellen
            </Button>
            {timeslotsAreEmpty && (
              <Text variant="note">Füge erst noch Zeitblöcke hinzu!</Text>
            )}
          </Box>
        </Box>
        <Spacer size={10} />
        <Box direction={['column', 'row']} space={8}>
          {timeSlots.map(({ title, description }, index) => {
            return (
              <TimeSlotCard
                title={title}
                description={description}
                onEdit={(data) =>
                  setTimeSlots((prev) => {
                    return prev.map((timeSlot, editIndex) => {
                      return index == editIndex ? data : timeSlot
                    })
                  })
                }
              />
            )
          })}
          <Box>
            <Button onClick={(_) => setModalVisible(true)}>Hinzufügen</Button>
          </Box>
        </Box>
      </Box>
      {/* TODO: Make this hiding with button */}
      <Modal
        title="Zeitblock hinzufügen"
        visible={modalVisible}
        zIndex={10}
        onClose={() => setModalVisible(false)}>
        <TimeSlotForm
          onCancel={(_) => setModalVisible(false)}
          onSave={(data) => {
            setTimeSlots((timeSlots) => [
              ...timeSlots,
              { ...data, id: timeSlots.length + 1 },
            ])
            setModalVisible(false)
          }}
        />
      </Modal>
    </Box>
  )
}
