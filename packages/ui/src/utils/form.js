import { useState } from 'react'

const defaultValidate = field =>
  field.isRequired ? (field.value.length > 0 ? true : false) : true
const defaultField = {
  isRequired: false,
  isTouched: false,
  isEnabled: true,
  value: '',
}

export function useField(initialField = {}, onValidate = defaultValidate) {
  const startField = {
    ...defaultField,
    ...initialField,
  }

  const [value, setValue] = useState({
    isValid: onValidate(startField),
    ...startField,
  })

  return [
    value,
    field =>
      setValue(prevField => ({
        ...prevField,
        isValid: onValidate({
          ...prevField,
          ...field,
        }),
        isTouched: false,
        ...field,
      })),
  ]
}

export function isFormValid(...fields) {
  return fields.reduce((isValid, field) => isValid && field.isValid, true)
}

export function getDataFromFields(fields) {
  return Object.keys(fields).reduce((data, name) => {
    data[name] = fields[name].value
    return data
  }, {})
}

export function touchFields(...setFields) {
  return setFields.forEach(setField => setField({ isTouched: true }))
}
