import React from 'react'
import TextComponent from './components/TextComponent'
import PasswdComponent from './components/PasswdComponent'

const InputText = (props) => {
  const {
    id = 'standard-basic',
    onChange = undefined,
    placeholder = '',
    label = 'Multiline Placeholder',
    fullWidth = false,
    type = 'text', // Types: text, password
    value = null,
  } = props

  if (type === 'text')
    return (
      <TextComponent
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        fullWidth={fullWidth}
        type={type}
      />
    )

  if (type === 'password')
    return (
      <PasswdComponent
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        fullWidth={fullWidth}
        value={value}
      />
    )
}

export default InputText
