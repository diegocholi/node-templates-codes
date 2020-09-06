import React, { createContext, useContext, useState, useEffect } from 'react'
import CircularProgress from '../../components/circularProgress/CircularProgress'
import { Alert } from '../../components'

const AppContext = createContext({ signed: false })

export const AppProvider = ({ children }) => {
  const [progessState, setProgressState] = useState(true)
  const [alert, setAlert] = useState({ open: false, mensagem: '' })

  const [appState, setAppState] = useState({
    token: false,
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      let tokenStorage = localStorage.getItem('@TRANS:token')

      if (tokenStorage) {
        setAppState({
          token: tokenStorage,
        })
      }
      setProgressState(false)
    }

    return () => {
      mounted = false
    }
  }, [])

  const openAlert = (mensagem) => {
    setAlert({ ...alert, open: true, mensagem: mensagem })
    setTimeout(
      () => setAlert({ ...alert, open: false, mensagem: undefined }),
      10000
    )
  }

  const logout = () => {
    localStorage.clear()
    setAppState({ token: null })
  }

  const auth = (value) => {
    localStorage.setItem('@TRANS:token', value)
    setAppState({ token: value })
  }

  if (progessState) return <CircularProgress color='secondary' />

  return (
    <AppContext.Provider
      value={{
        token: appState.token,
        auth,
        logout,
        openAlert,
      }}
    >
      {alert.open ? <Alert mensagem={alert.mensagem} /> : null}
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  return useContext(AppContext)
}

export default useApp
