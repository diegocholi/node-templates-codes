import {
  useState,
  FC,
  useContext,
  createContext,
  PropsWithChildren,
  ReactFragment,
} from 'react'

interface State {
  isAuthenticate: boolean
  setContext: any
}

const AppContext = createContext<State>({
  isAuthenticate: false,
  setContext: undefined,
})

const AppProvider: FC<PropsWithChildren<ReactFragment>> = ({ children }) => {
  const setContext = (value: State) => {
    setState({ ...state, ...value })
  }

  const [state, setState] = useState<State>({
    isAuthenticate: false,
    setContext: setContext,
  })

  return (
    <AppContext.Provider
      value={{
        isAuthenticate: state.isAuthenticate,
        setContext: setContext,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): State => {
  return useContext(AppContext)
}

export default AppProvider
