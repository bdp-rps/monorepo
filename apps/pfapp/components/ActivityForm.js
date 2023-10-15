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
} from '@bdp-rps/ui'

import Location from '../utils/location'
import Duration from '../utils/duration'
import GroupType from '../utils/groupType'
import Size from '../utils/size'
import Season from '../utils/season'

const TimeSlot = ({ onAdd, isAdded, onDelete, values }) => {
  const duration = useField({
    value: values?.duration,
    disabled: isAdded,
    name: 'duration',
    required: true,
  })
  const description = useField({
    value: values?.description,
    name: 'description',
    required: true,
    disabled: isAdded,
  })
  const materials = useField({
    name: 'materials',
    value: values?.materials,
    disabled: isAdded,
  })
  const responsibility = useField({
    name: 'responsibility',
    value: values?.responsibility,
    disabled: isAdded,
  })

  const { submit, reset } = useForm(
    duration,
    description,
    materials,
    responsibility
  )
  return (
    <Card space={4}>
      <Text variant="category">{`Zeitblock ${values?.id || 0}`}</Text>
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
              {Duration.values.map((duration) => (
                <option value={duration}>{duration}</option>
              ))}
            </SelectInput>
          </Box>
        </Box>
        {!isAdded ? (
          <Box alignSelf="flex-start">
            <Button type="submit">Hinzufügen</Button>
          </Box>
        ) : (
          <Box alignSelf="flex-start">
            <Button onClick={() => onDelete(values.id)}>Löschen</Button>
          </Box>
        )}
      </Box>

      {/* <Button type="reset">Zurücksetzen</Button> */}
    </Card>
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
  })

  const { submit, reset } = useForm(
    title,
    description,
    location,
    groupType,
    size,
    preperation,
    notes
  )

  const [timeSlots, setTimeSlots] = React.useState([])

  return (
    <Box paddingVertical={4}>
      <Box
        as="form"
        noValidate
        space={4}
        onSubmit={(e) => {
          e.preventDefault()

          submit((isValid, data) => {
            if (isValid) {
              console.log('DONE', data)
            }
          })
        }}>
        <TextInput
          label="Title"
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
            {Location.values.map((location) => (
              <option value={location}> {Location.toText(location)}</option>
            ))}
          </SelectInput>
          <SelectInput label="Stufe" {...groupType.props}>
            {GroupType.values.map((type) => {
              return <option value={type}> {GroupType.toText(type)}</option>
            })}
          </SelectInput>
          <SelectInput label="Gruppengröße" {...size.props}>
            {Size.values.map((size) => {
              return <option value={size}> {Size.toText(size)}</option>
            })}
          </SelectInput>
          <SelectInput label="Jahreszeit" {...season.props}>
            {Season.values.map((season) => {
              return <option value={season}> {Season.toText(season)}</option>
            })}
          </SelectInput>
        </Box>
        <TextArea
          label="Notizen"
          placeholder="Falls es ein paar Besonderheiten gibt pack diese gerne hier rein"
          {...description.props}
        />
        <TextInput
          label="Vorbereitungszeit (Minuten)"
          type="number"
          placeholder="Die Minuten die es etwa braucht um die Gruppenstunde vorzubereiten"
          {...preperation.props}
        />
        <Box alignSelf="flex-start">
          <Button type="submit">Gruppenstunde erstellen</Button>
        </Box>
      </Box>
      <Spacer size={10} />
      <Box space={4}>
        <TimeSlot
          onAdd={(data) =>
            setTimeSlots((timeSlots) => [
              ...timeSlots,
              { ...data, id: timeSlots.length + 1 },
            ])
          }
        />
        {timeSlots.map((values, index) => (
          <TimeSlot
            values={{ ...values }}
            isAdded={true}
            onDelete={(id) =>
              setTimeSlots((timeSlots) =>
                timeSlots.filter((timeSlot) => timeSlot.id !== id)
              )
            }
          />
        ))}

        <Text>
          Gesamtdauer der Zeitblocks in Minuten:{' '}
          {timeSlots.reduce((prev, current) => {
            console.log(prev, current)
            return prev + parseInt(current.duration)
          }, 0)}
        </Text>
      </Box>
    </Box>
  )
}
