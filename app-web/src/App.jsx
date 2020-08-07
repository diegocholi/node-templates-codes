import React from 'react'
import ThemesRouter from './ThemesRouter'

import { AppProvider } from './contexts/AppContext'

function App() {
  return (
    <AppProvider>
      <ThemesRouter />
    </AppProvider>
  )
}

export default App
