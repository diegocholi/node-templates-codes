import React from 'react'
import { Container, MensageDiv, ExitButton } from './styled'

const Alert = ({ mensagem, handleClosedAlert, backgroundColor, color }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <ExitButton onClick={handleClosedAlert} color={color}>
        X
      </ExitButton>
      <MensageDiv color={color}>{mensagem}</MensageDiv>
    </Container>
  )
}

export default Alert
