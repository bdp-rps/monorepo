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
} from '@bdp-rps/ui'

import Location from '../utils/location'
import GroupType from '../utils/groupType'
import Size from '../utils/size'
import Season from '../utils/season'

export default (props) => {
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

  return (
    <Box
      as="form"
      noValidate
      space={4}
      onSubmit={(e) => {
        e.preventDefault()

        submit((isValid, data) => {
          if (isValid) {
            console.log('DONE')
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
        placeholder="einmal flott um was es geht"
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
            console.log(GroupType.toText(type))
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
        placeholder="falls es ein paar Besonderheiten gibt pack diese gerne hier rein"
        {...description.props}
      />
      <TextInput
        label="Vorbereitungszeit (Minuten)"
        type="number"
        placeholder="Die Minuten die es etwa braucht um die Gruppenstunde vorzubereiten"
        {...preperation.props}
      />
      {/* <TextInput label="Ort"{...location.props} />
      <TextInput label="Start-Datum" type="date" {...startDate.props} />
      <TextInput label="End-Datum" type="date" {...endDate.props} />
      <TextInput label="Reiseweg" {...destination.props} />
      <TextArea
        label="Kommentar"
        placeholder="z.B. inkl. Materialtransport, daher so viel"
        {...note.props}
      /> */}
    </Box>
  )
}
