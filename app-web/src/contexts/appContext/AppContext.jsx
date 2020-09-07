import React, { createContext, useContext, useState, useEffect } from 'react'
import CircularProgress from '../../components/circularProgress/CircularProgress'
import { Alert } from '../../components'

const AppContext = createContext({ signed: false })

export const AppProvider = ({ children }) => {
  const [progessState, setProgressState] = useState(true) // Props de Progress Circle
  const [alert, setAlert] = useState({
    open: false,
    mensagem: '',
    backgroundColor: 'rgba(36, 143, 66, 0.9);',
    color: '#fff',
  }) // Props de controle do Alert

  const [userState, setUserState] = useState({
    token: false,
  }) // Variaveis de usuário

  useEffect(() => {
    let mounted = true
    if (mounted) {
      let tokenStorage = localStorage.getItem('@TRANS:token')

      if (tokenStorage) {
        setUserState({
          token: tokenStorage,
        })
      }
      setProgressState(false)
    }

    return () => {
      mounted = false
    }
  }, []) // useEffect de validação de token

  /**
   * Método compartilhado via provider para abertura de Alert
   * @param {*} mensagem Mensagem a ser exibida no Alert
   * @param {*} backgroundColor Cor de fundo
   * @param {*} color Cor da fonte
   */
  const openAlert = (
    mensagem,
    backgroundColor = 'rgba(36, 143, 66, 0.9);',
    color = '#fff'
  ) => {
    setAlert({
      ...alert,
      open: true,
      mensagem: mensagem,
      backgroundColor: backgroundColor,
      color: color,
    })
    setTimeout(
      () => setAlert({ ...alert, open: false, mensagem: undefined }),
      10000
    )
  }

  const handleClosedAlert = () => {
    setAlert({ ...alert, open: false, mensagem: undefined })
  } // Método para fechamento do Alert

  /**
   * Método de limpeza do token e saida da aplicação
   */
  const logout = () => {
    localStorage.clear()
    setUserState({ token: null })
  }

  /**
   * Método de salvamento do token e mudança de estado das informações do usuário
   * @param {*} value Token
   */
  const auth = (value) => {
    localStorage.setItem('@TRANS:token', value)
    setUserState({ token: value })
  }

  if (progessState)
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: ' 50%',
          marginRight: '-50%',
        }}
      >
        <CircularProgress color='secondary' />
      </div>
    )

  return (
    <AppContext.Provider
      value={{
        token: userState.token,
        auth,
        logout,
        openAlert,
      }}
    >
      {alert.open ? (
        <Alert
          mensagem={alert.mensagem}
          backgroundColor={alert.backgroundColor}
          color={alert.color}
          handleClosedAlert={handleClosedAlert}
        />
      ) : null}
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  return useContext(AppContext)
}

export default useApp
