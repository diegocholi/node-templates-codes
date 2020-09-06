import React from 'react'
import { Container, MensageDiv, ExitButton } from './styled'
import Grid from '@material-ui/core/Grid'

const Alert = ({ mensagem }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ExitButton>X</ExitButton>
            </Grid>
            <MensageDiv>{mensagem}</MensageDiv>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Alert
