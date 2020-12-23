import { useAppContext } from '../../contexts/AppContext/AppContext'
import { ContentLogin, ContainerLogin } from './styled'
import { Button, TextField, Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { Passwd } from '../../components/Inputs'

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { setContext } = useAppContext()

  return (
    <ContentLogin>
      <ContainerLogin>
        <form autoComplete='off'>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField id='standard-basic' label='Usuário' />
            </FormControl>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Passwd label='Senha' />
          </Grid>
          <br />
          <div
            style={{
              float: 'right',
            }}
          >
            <Button
              color='primary'
              onClick={() => setContext({ isAuthenticate: true })}
            >
              Entrar
            </Button>
          </div>
        </form>
      </ContainerLogin>
    </ContentLogin>
  )
}

export default Login
