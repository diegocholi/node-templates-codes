import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({ id, label, placeholder, onChange, fullWidth, type }) => (
  <TextField
    id={id}
    label={label}
    placeholder={placeholder}
    onChange={onChange}
    fullWidth={fullWidth}
    type={type}
  />
)
