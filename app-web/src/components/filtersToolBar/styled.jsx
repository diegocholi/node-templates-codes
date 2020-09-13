import styled from 'styled-components'
import colors from '../../constants/themeColor'
export const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${colors.navbarColor};
  border: none;
  color: #fff;
  height: 60px;
  width: 60px;
  margin-right: 20px;
  border-radius: 5px;
  float: right;
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    height: 50px;
    width: 50px;
    margin-right: -4px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    height: 50px;
    width: 50px;
    margin-right: -4px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    height: 40px;
    width: 40px;
    margin-right: -4px;
  }
`

export const AddButton = styled.button`
  background-color: ${colors.navbarColor};
  color: #fff;
  border: none;
  cursor: pointer;
  height: 60px;
  width: 70px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    height: 60px;
    width: 70px;
    margin-left: 8px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    height: 60px;
    width: 70px;
    margin-left: 8px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    height: 40px;
    width: 50px;
    margin-left: 8px;
  }
`
