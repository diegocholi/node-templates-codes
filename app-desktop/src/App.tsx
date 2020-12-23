import { FC } from 'react'
import AppProvider from './contexts/AppContext/AppContext'
import LoginHandler from './LoginHandler'
import { AppStyled } from './styled'

const App: FC = () => {
  return (
    <AppProvider>
      <AppStyled backgroundColor='#84778E'>
        <LoginHandler />
      </AppStyled>
    </AppProvider>
  )
}

export default App
