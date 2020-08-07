import React from 'react'
import { databaseInit } from './database/sql-lite/databaseInit'
import ThemeRouter from './ThemeRouter'
import AppProvider, { useApp } from './contexts/AppContext'

const App = () => {
  databaseInit()
  return (
    <AppProvider>
      <ThemeRouter />
    </AppProvider>
  )
}

export default App
