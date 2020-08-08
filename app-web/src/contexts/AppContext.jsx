import React, { createContext, useContext, useState, useEffect } from 'react'
// import CircularProgress from '@material-ui/core/CircularProgress'
import CircularProgress from '../components/circularProgress/CircularProgress'

const AppContext = createContext({ signed: false })

export const AppProvider = ({ children }) => {
  const [progessState, setProgressState] = useState(true)

  const [appState, setAppState] = useState({
    token: false,
  })

  useEffect(() => {
    let mounted = true
    if (mounted) {
      let tokenStorage = localStorage.getItem('@RNAuth:token')

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

  const logout = () => {
    localStorage.clear()
    setAppState({ token: null })
  }

  const auth = (value) => {
    localStorage.setItem('@RNAuth:token', value)
    setAppState({ token: value })
  }

  if (progessState) return <CircularProgress color='secondary' />

  return (
    <AppContext.Provider
      value={{
        token: appState.token,
        auth,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  return useContext(AppContext)
}

export default useApp
