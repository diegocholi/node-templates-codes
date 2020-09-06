import React, { useState } from 'react'
import useApp from '../../../contexts/AppContext'
import { useRequest } from '../../../hooks/apiService'
import LoginComponent from './components/LoginComponent'
const Login = () => {
  const { auth } = useApp()
  const [openForm, setOpenForm] = useState(false)
  const [inputUser, setInputUser] = useState({
    email: '',
    senha: '',
  })

  const [, statusRequestLogin, fetchLogin] = useRequest(
    {},
    {
      url: `authenticate`,
      method: 'post',
      data: {
        email: inputUser.email,
        senha: inputUser.senha,
      },
    },
    null,
    {
      onComplete: (data) => {
        console.log('Finalizado')
        auth(data.token)
      },
      onError: (error) => {
        console.log('Erro ao efetuar o login')
      },
    }
  )

  const handlerLoginButton = () => {
    if (inputUser.email && inputUser.senha) {
      fetchLogin()
    }
  }

  const handleOpenForm = () => {
    setOpenForm(true)
  }
  const handleClosedForm = () => {
    setOpenForm(false)
  }
  const handlePasswdChange = (event) => {
    setInputUser({ ...inputUser, senha: event.target.value })
  }
  const handleEmailChange = (event) => {
    setInputUser({ ...inputUser, email: event.target.value })
  }
  return (
    <LoginComponent
      handleEmailChange={handleEmailChange}
      handlePasswdChange={handlePasswdChange}
      handlerLoginButton={handlerLoginButton}
      handleOpenForm={handleOpenForm}
      handleClosedForm={handleClosedForm}
      openForm={openForm}
    />
  )
}
export default Login