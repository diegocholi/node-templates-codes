import { useAppContext } from './contexts/AppContext/AppContext'
export interface LoginHandlerProps {}

const LoginHandler: React.FC<LoginHandlerProps> = () => {
  const { isAuthenticate } = useAppContext()
  return isAuthenticate ? <p>Login</p> : <p>Logout</p>
}

export default LoginHandler
