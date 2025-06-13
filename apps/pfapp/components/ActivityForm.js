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

import { useRouter } from 'next/router'

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

const useFileUpload = () => {
  const [file, setFile] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setError(null)
  }

  const uploadFile = async () => {
    if (!file) return null

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('files', file)
      
      const response = await axios.post(
        'https://docs.bdp-rps.de/api/upload',
        formData
      )
      return response.data[0].id
    } catch (error) {
      setError('Failed to upload file. Please try again.')
      console.error('File upload error:', error)
      return null
    } finally {
      setIsUploading(false)
    }
  }

  return {
    file,
    isUploading,
    error,
    handleFileChange,
    uploadFile,
  }
}

const FileInput = ({ handleFileChange, error }) => {
  return (
    <Box direction="column" space={1}>
      <Box direction="row" space={1} alignItems="center">
        <Box>
          <input
            type="file"
            onChange={handleFileChange}
            aria-label="Upload file"
          />
        </Box>
      </Box>
      {error && (
        <Text color="error" variant="note">
          {error}
        </Text>
      )}
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
  const [currentMaterialInput, setCurrentMaterialInput] = React.useState(null)
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)

  const handleAddMaterial = () => {
    setMaterials((prev) => {
      return currentMaterialInput ? [...prev, currentMaterialInput] : prev
    })
    setCurrentMaterialInput(null)
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
            onBlur={() => {}}
            onChange={(e) => setCurrentMaterialInput(e.target.value)}
          />
          <Box direction="row" justifyContent="space-between" space={2}>
            <Button onClick={(_) => handleAddMaterial()}>Speichern</Button>
            <Button onClick={(_) => setModalVisible(false)} variant="secondary">
              Abbrechen
            </Button>
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

const useActivityFormFields = () => {
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

  return {
    fields: {
      title,
      description,
      location,
      groupType,
      size,
      season,
      preperation,
      uploadedBy,
      materials,
    },
    submit,
    reset,
  }
}

export default () => {
  const router = useRouter()
  const { fields, submit, reset } = useActivityFormFields()
  const [timeSlots, setTimeSlots] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const timeslotsAreEmpty = timeSlots.length === 0
  const { file, isUploading, error, handleFileChange, uploadFile } =
    useFileUpload()
  const [materialsData, setMaterialsData] = React.useState([])
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)

  const [responseModalVisible, setResponseModalVisible] =
    useScrollBlockingOverlay(false)

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
              setIsLoading(true)

              try {
                const fileId = await uploadFile()

                const postActivitySlotsPromises = timeSlots.map((timeSlot) => {
                  const { description, title } = timeSlot
                  return postActivitySlots({
                    description,
                    title,
                  })
                })

                const activitySlots = await Promise.all(
                  postActivitySlotsPromises
                )

                const activitySlotIds = await Promise.all(
                  activitySlots.map((res) =>
                    res.json().then(({ data }) => data.id)
                  )
                )

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

                await postActivity({
                  description,
                  groupType,
                  location: location || undefined,
                  size: size || undefined,
                  season: season || undefined,
                  attachment: fileId ? [fileId] : undefined,
                  preperation: preperation || undefined,
                  title,
                  uploadedBy,
                  activity_slots: activitySlotIds,
                })

                setTimeSlots([])
                setResponseModalVisible(true)
                reset()
              } catch (error) {
                console.error('Failed to submit activity:', error)
              } finally {
                setIsLoading(false)
              }
            }
          })
        }}>
        <Box flex="1">
          <TextInput label="Titel" {...fields.title.props} />
        </Box>
        <TextArea label="Beschreibung" {...fields.description.props} />
        <Box
          direction="row"
          wrap="wrap"
          extend={{ gap: 8 }}
          justifyContent="space-between">
          <Box flex="1">
            <SelectInput label="Ort" {...fields.location.props}>
              <option value={undefined}>egal</option>
              {Location.values.map((location) => (
                <option value={location} key={location}>
                  {Location.toText(location)}
                </option>
              ))}
            </SelectInput>
          </Box>
          <Box flex="1">
            <SelectInput label="Stufe" {...fields.groupType.props}>
              {GroupType.values.map((type) => {
                return (
                  <option value={type} key={type}>
                    {GroupType.toText(type)}
                  </option>
                )
              })}
            </SelectInput>
          </Box>
          <Box flex="1">
            <SelectInput label="Gruppengröße" {...fields.size.props}>
              <option value={undefined}>egal</option>
              {Size.values.map((size) => {
                return (
                  <option key={size} value={size}>
                    {Size.toText(size)}
                  </option>
                )
              })}
            </SelectInput>
          </Box>
          <Box flex="1">
            <SelectInput label="Jahreszeit" {...fields.season.props}>
              <option value={undefined}>egal</option>
              {Season.values.map((season) => {
                return (
                  <option value={season} key={season}>
                    {Season.toText(season)}
                  </option>
                )
              })}
            </SelectInput>
          </Box>
          <Box>
            <TextInput
              label="Vorbereitungszeit (Minuten)"
              type="number"
              {...fields.preperation.props}
            />
          </Box>
        </Box>

        <Box>
          <FileInput handleFileChange={handleFileChange} error={error} />
        </Box>

        <MaterialInput
          field={fields.materials}
          materials={materialsData}
          setMaterials={setMaterialsData}
        />

        <Box direction="row" space={6} justifyContent="space-between">
          <Box>
            <TextInput
              label="Wer ist so nett und erstellt diese Gruppenstunde?"
              {...fields.uploadedBy.props}
            />
          </Box>
          <Box alignSelf="flex-start" space={2}>
            <Button
              type="submit"
              loading={isLoading || isUploading}
              disabled={timeslotsAreEmpty}>
              Gruppenstunde erstellen
            </Button>
            {timeslotsAreEmpty && (
              <Text variant="note">Füge erst noch Zeitblöcke hinzu!</Text>
            )}
          </Box>
        </Box>
        <Spacer size={2} />
        <Box direction={['column', 'row']} wrap="wrap" extend={{ gap: 32 }}>
          {timeSlots.map(({ title, description }, index) => {
            return (
              <Box flex="1" key={index}>
                <TimeSlotCard
                  position={index + 1}
                  title={title}
                  description={description}
                  onDelete={(index) =>
                    setTimeSlots((prev) => prev.filter((_, i) => i != index))
                  }
                  onEdit={(data) =>
                    setTimeSlots((prev) => {
                      return prev.map((timeSlot, editIndex) => {
                        return index == editIndex ? data : timeSlot
                      })
                    })
                  }
                />
              </Box>
            )
          })}
          <Box>
            <Button onClick={(_) => setModalVisible(true)}>
              Zeitblock hinzufügen
            </Button>
          </Box>
        </Box>
      </Box>
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
      <Modal
        title="Gruppenstunde erstellt"
        visible={responseModalVisible}
        zIndex={10}
        onClose={() => setResponseModalVisible(false)}>
        <Box>
          <Text>Die Gruppenstunde wurde erfolgreich erstellt.</Text>
          <Box direction="row" justifyContent="space-between" space={2}>
            <Button
              onClick={(_) => {
                setResponseModalVisible(false)
                router.push('/')
              }}>
              Zurück zur Startseite
            </Button>
            <Button
              onClick={(_) => {
                setResponseModalVisible(false)
              }}>
              Weitere Gruppenstunden hinzufügen
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
