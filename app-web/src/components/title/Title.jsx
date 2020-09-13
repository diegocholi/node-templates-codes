import React from 'react'
import styled from 'styled-components'

const Hr = styled.hr`
  overflow: visible; /* For IE */
  height: 30px;
  border-style: solid;
  border-color: #fff;
  border-width: 1px 0 0 0;
  border-radius: 20px;
  ::before {
    display: block;
    content: '';
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: #fff;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
`
const H1 = styled.h1`
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 25px;
  margin-top: 25px;
  margin-left: 25px;
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    font-size: 16px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    font-size: 16px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    font-size: 12px;
  }
`

const ContainerHR = styled.div`
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    width: 250px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    width: 250px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    width: 170px;
  }
`

const H1Component = ({ children, horizontalLine = false }) => (
  <>
    <H1>{children}</H1>
    {horizontalLine ? (
      <ContainerHR>
        <Hr />
      </ContainerHR>
    ) : undefined}
  </>
)

const Title = styled(H1Component)``

export default Title
