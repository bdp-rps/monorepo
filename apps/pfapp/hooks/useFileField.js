import { useState, useEffect } from 'react'

// const result = Object.keys(obj).reduce((accumulator, key) => {
//   accumulator[key] = obj[key] * 2
//   return accumulator
// }, {})

function validateField(validation, value) {
  // return Object.keys(validation).reduce(())
  // return objectReduce(
  //   validation,
  //   (error, validate, message) => {
  //     // early return to skip the rest once the first validation failed
  //     if (error) {
  //       return error
  //     }
  //     if (validate instanceof RegExp) {
  //       if (typeof value === 'string' && value.match(validate) === null) {
  //         return message
  //       }
  //     } else if (!validate(value)) {
  //       return message
  //     }
  //   },

  //   undefined
  // )
  return undefined
}

export default function useFileField({
  name,
  value = '',
  touched = false,
  disabled = false,
  required = false,
  loading = false,
  showValidationOn,
  requiredErrorMessage = 'Det här fältet är obligatoriskt',
  validation = {},
}) {
  console.log('value', value)
  const valueType = typeof value
  // add a special validation for required fields where the browser doesn't auto catch
  if (required) {
    validation[requiredErrorMessage] = (value) =>
      valueType === 'string'
        ? value.length > 0
        : valueType === 'boolean'
        ? value
        : true
  }

  const errorMessage = validateField(validation, value)
  const initial = {
    value,
    errorMessage,
    isLoading: loading,
    isDisabled: disabled,
    isTouched: touched,
    isRequired: required,
    isValid: !errorMessage && !loading,
  }

  const [field, setField] = useState(initial)

  const touch = () => setField((field) => ({ ...field, isTouched: true }))
  const untouch = () => setField((field) => ({ ...field, isTouched: false }))
  const update = (update) => {
    if (typeof update === 'function') {
      setField(update)
    } else {
      setField((field) => ({ ...field, ...update }))
    }
  }

  function onChange(event) {
    console.log('targetValue', targetValue)
    const targetValue =
      valueType === 'boolean' ? event.target.checked : event.target.value
    const newValue =
      targetValue === null || targetValue === undefined ? '' : targetValue

    const dirty = newValue !== value
    const errorMessage = validateField(validation, newValue)

    setField((field) => ({
      ...field,
      value: newValue,
      errorMessage,
      isTouched: showValidationOn === 'change' ? dirty : field.isTouched,
      isValid: !errorMessage && !field.isLoading,
    }))
  }

  const props = {
    name,
    value: field.value,
    loading: field.isLoading,
    disabled: field.isDisabled,
    required: field.isRequired,
    // only show errrorMessage and validation styles if the field is touched according to the config
    errorMessage: field.isTouched ? field.errorMessage : undefined,
    isValid: field.isTouched ? !field.errorMessage : true,
    onChange,
  }

  // by default, we always hide validation errors once the field is focused again
  props.onFocus = untouch
  if (showValidationOn === 'blur') {
    props.onBlur = touch
  }

  useEffect(() => {
    const errorMessage = validateField(validation, value)

    setField((field) => ({
      ...field,
      value,
      isValid: !errorMessage && !field.isLoading,
      errorMessage,
    }))
  }, [value])

  return {
    // we expose those values for debugging reasons
    ...field,
    initial,
    name,

    props,
    update,
    touch,
    untouch,
  }
}
