import React from 'react'
import { InputText } from '../../../../components/'
import { Container, Div, Button, ExitButton } from '../styled'
import Grid from '@material-ui/core/Grid'

export default ({
  handleEmailChange,
  handlePasswdChange,
  handlerLoginButton,
  handleClosedForm,
}) => (
  <Container>
    <ExitButton onClick={handleClosedForm}>X</ExitButton>
    <Div>
      <form action='#'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputText
              label={'E-mail'}
              id={'email'}
              fullWidth
              onChange={(event) => handleEmailChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              label={'Senha'}
              id={'senha'}
              type={'password'}
              fullWidth
              onChange={(event) => handlePasswdChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handlerLoginButton}>Logar</Button>
          </Grid>
        </Grid>
      </form>
    </Div>
  </Container>
)
