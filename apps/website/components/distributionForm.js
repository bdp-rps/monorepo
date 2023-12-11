import React from 'react'
import {
  Box,
  Text,
  Button,
  TextInput,
  SelectInput,
  Spacer,
  useField,
  useForm,
  useBoolField,
  Checkbox,
} from '@bdp-rps/ui'

import postDistributors from '../api/postDistributors.js'
import staemme from '../data/staemme.json'

const DistributionForm = () => {
  const nameField = useField({
    name: 'name',
    required: true,
  })

  const typeField = useField({
    name: 'type',
    required: true,
  })

  const mailField = useField({
    name: 'mail',
    required: true,
    validation: {
      'Bitte füge eine valide Email Adresse ein': (val) =>
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
          val
        ),
    },
  })

  const liedgutField = useBoolField({
    name: 'liedgut',
  })
  const moderatorinnenField = useBoolField({
    name: 'moderatorinnen',
  })
  const rrField = useBoolField({
    name: 'rr',
  })
  const ringeField = useBoolField({
    name: 'ringe',
  })
  const stafuesField = useBoolField({
    name: 'stafues',
  })
  const pfadisField = useBoolField({
    name: 'pfadis',
  })
  const groupField = useField({
    name: 'group',
    required: true,
  })

  const { submit, reset } = useForm(
    nameField,
    typeField,
    mailField,
    liedgutField,
    moderatorinnenField,
    rrField,
    ringeField,
    stafuesField,
    pfadisField,
    groupField
  )

  return (
    <Box
      as="form"
      space={2}
      onSubmit={(e) => {
        e.preventDefault()
        submit(async (isValid, data) => {
          if (isValid) {
            const {
              liedgut,
              moderatorinnen,
              rr,
              ringe,
              stafues,
              pfadis,
              group,
              type,
            } = data
            const response = await postDistributors({
              ...data,
              distributions: [
                {
                  name: liedgutField.name,
                  val: liedgutField.value,
                  label: 'Liedgut',
                },
                {
                  name: moderatorinnenField.name,
                  val: moderatorinnenField.value,
                  label: 'Moderatorinnen',
                },
                {
                  name: rrField.name,
                  val: rrField.value,
                  label: 'Ranger Rover',
                },
                {
                  name: ringeField.name,
                  val: ringeField.value,
                  label: 'Ringe',
                },
                {
                  name: stafuesField.name,
                  val: stafuesField.value,
                  label: 'Stafues',
                },
                {
                  name: pfadisField.name,
                  val: pfadisField.value,
                  label: 'Pfadis',
                },
              ],
            })
            if (response?.status === 200) {
              reset()
            }
          }
        })
      }}>
      <SelectInput label="Auswahl" {...typeField.props}>
        <option value="" />
        <option value="unsubscribe">Abmeldung</option>
        <option value="subscribe">Anmeldung</option>
      </SelectInput>
      <TextInput label="Name" {...nameField.props} />
      <Spacer />

      <SelectInput label="Stamm" {...groupField.props}>
        <option value=""></option>
        {staemme
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          )
          .map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
      </SelectInput>
      <TextInput label="Email" {...mailField.props} />
      <Spacer size={2} />
      <Box space={2}>
        <Text>Mailverteiler auswählen: </Text>
        <Checkbox label="Liedgut" {...liedgutField.props} />
        <Checkbox label="Moderator*innen" {...moderatorinnenField.props} />
        <Checkbox label="Ranger Rover" {...rrField.props} />
        <Checkbox label="Ringe" {...ringeField.props} />
        <Checkbox label="StaFüs" {...stafuesField.props} />
        <Checkbox label="Pfadis" {...pfadisField.props} />
      </Box>
      <Spacer size={2} />
      <Button type="submit">Absenden</Button>
    </Box>
  )
}
export default DistributionForm
