import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'

import FormControl from '@material-ui/core/FormControl'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const PassWdComponent = (props) => {
  const { id, label, onChange, fullWidth } = props
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
    onChange(event)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(event) => handleChange(event)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PassWdComponent
