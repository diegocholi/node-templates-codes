import React from 'react'

const Form = ({ children }) => (
  <form onClick={(event) => event.preventDefault()}>{children}</form>
)

export default Form
