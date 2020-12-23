import { useAppContext } from './contexts/AppContext/AppContext'
import { Login } from './views'
import { Theme } from './Theme'
export interface LoginHandlerProps {}

const LoginHandler: React.FC<LoginHandlerProps> = () => {
  const { isAuthenticate } = useAppContext()
  return isAuthenticate ? <Theme /> : <Login />
}

export default LoginHandler
