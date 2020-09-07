import styled from 'styled-components'

export const Container = styled.div`
  min-height: 25px;
  max-height: 500px;
  position: fixed;
  z-index: 9999; /* número máximo é 9999 */
  right: 50%;
  left: 0;
  background-color: ${(props) => props.backgroundColor};
  padding: 25px 15px 0 0;
  margin: 10px 25px 25px 25px;
  border-radius: 5px;
  -webkit-box-shadow: 9px 10px 5px -4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 9px 10px 5px -4px rgba(0, 0, 0, 0.4);
  box-shadow: 9px 10px 5px -4px rgba(0, 0, 0, 0.4);

  @-webkit-keyframes scale-up-tl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  @keyframes scale-up-tl {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  -webkit-animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`

export const MensageDiv = styled.div`
  color: ${(props) => props.color};
  font-family: 'Roboto';
  margin-bottom: 10px;
  margin-left: 30px;
  @media only screen and (min-width: 541px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 540px) {
    font-size: 12px;
    margin-top: -14px;
  }
  @media only screen and (max-width: 414px) {
    font-size: 11px;
    margin-top: -15px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 10px;
    margin-top: -15px;
  }
  @media only screen and (max-width: 280px) {
    font-size: 8px;
    margin-right: 5px;
    margin-top: -15px;
  }
`

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${(props) => props.color};
  position: absolute;
  padding: 6px 7px 5px 5px;
  top: 0;
  bottom: 0;
  :hover {
    font-weight: bold;
  }
`
