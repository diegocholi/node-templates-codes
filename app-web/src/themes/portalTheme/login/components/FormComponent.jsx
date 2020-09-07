import React from 'react'
import { InputText, Form, CircularProgress } from '../../../../components/'
import { Container, Div, Button, ExitButton } from '../styled'
import Grid from '@material-ui/core/Grid'

export default ({
  handleEmailChange,
  handlePasswdChange,
  handlerLoginButton,
  handleClosedForm,
  statusRequestLogin,
}) => (
  <Container>
    <ExitButton onClick={handleClosedForm}>X</ExitButton>
    <Div>
      {!statusRequestLogin.isLoading ? (
        <Form>
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
        </Form>
      ) : (
        <CircularProgress />
      )}
    </Div>
  </Container>
)
