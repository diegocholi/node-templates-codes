import React from 'react'
import TextField from '@material-ui/core/TextField'

const InputText = (props) => {
  const {
    id = 'standard-basic',
    onChange = undefined,
    placeholder = 'Placeholder',
    label = 'Multiline Placeholder',
  } = props
  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
    />
  )
}

export default InputText
