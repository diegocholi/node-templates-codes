import React, { createContext, useContext, useState, useEffect } from 'react'
import { setData, getData } from '../database/localStorage/localStorage'

export const AppContext = createContext({ signed: true })

const AppProvider = ({ children }) => {
  const [signed, setSigned] = useState(false)
  useEffect(() => {
    getData('token').then((localToken) => {
      if (localToken) setSigned(localToken)
    })
  }, [])

  const auth = () => {
    setData('token', true)
    setSigned(true)
  }

  const logout = () => {
    setData('token', false)
    setSigned(false)
  }

  return (
    <AppContext.Provider value={{ signed: signed, auth, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  return useContext(AppContext)
}

export default AppProvider
