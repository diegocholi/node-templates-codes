import React from 'react'
import ThemesRouter from './ThemesRouter'
import { AppProvider } from './contexts/AppContext'
import { GlobalStyled } from './GlobalStyled'

function App() {
  return (
    <AppProvider>
      <GlobalStyled />
      <ThemesRouter />
    </AppProvider>
  )
}

export default App
