import { FC, useState } from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'

export interface PasswdProps {
  label?: string
}

const Passwd: FC<PasswdProps> = (props: PasswdProps) => {
  const { label = 'Password' } = props

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault()
  }

  return (
    <FormControl>
      <InputLabel htmlFor='standard-adornment-password'>{label}</InputLabel>
      <Input
        id='standard-adornment-password'
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default Passwd
