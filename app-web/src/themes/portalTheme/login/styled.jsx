import styled from 'styled-components'

export const Container = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  right: 0;
  margin: 20px 20px 20px 20px;

  @-webkit-keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  -webkit-animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`

export const Div = styled.div`
  padding: 40px 40px 40px 40px;
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);
  -moz-box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);
  box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);
`

export const ExitButton = styled.button`
  cursor: pointer;
  float: left;
  color: red;
  background-color: #fff;
  border-top: none;
  border-left: none;
  outline: none;
  padding: 0px, 0px, 0px, 0px;
  margin-top: 7px;
  margin-left: 7px;
  border-radius: 100%;
  border-width: 1px;
  :hover {
    font-weight: bold;
    border-width: 2px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #00bd00;
  height: 30px;
  width: 150px;
  float: right;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: 2px solid #fff;
  :hover {
    border: 2px solid #75ff75;
  }
`

export const OpenFormButton = styled.button`
  cursor: pointer;
  background-color: #d1ffd1;
  margin-right: 25px;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  border-radius: 100% 0px 100% 100%;
  border: 2px solid #fff;
  -webkit-box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);
  -moz-box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);
  box-shadow: 10px 10px 12px -4px rgba(112, 102, 119, 0.75);

  @-webkit-keyframes rotate-scale-up-diag-1 {
    0% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
      transform: scale(1) rotate3d(1, 1, 0, 0deg);
    }
    50% {
      -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
      transform: scale(2) rotate3d(1, 1, 0, -180deg);
    }
    100% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
      transform: scale(1) rotate3d(1, 1, 0, -360deg);
    }
  }
  @keyframes rotate-scale-up-diag-1 {
    0% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
      transform: scale(1) rotate3d(1, 1, 0, 0deg);
    }
    50% {
      -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
      transform: scale(2) rotate3d(1, 1, 0, -180deg);
    }
    100% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
      transform: scale(1) rotate3d(1, 1, 0, -360deg);
    }
  }

  :hover {
    border: 2px solid #75ff75;
    -webkit-animation: rotate-scale-up-diag-1 0.7s linear backwards;
    animation: rotate-scale-up-diag-1 0.7s linear backwards;
  }
`
