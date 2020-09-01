import styled from 'styled-components'
import colors from '../../themes/consts/themeColor'
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
`

export const AddButton = styled.button`
  background-color: ${colors.navbarColor};
  color: #fff;
  border: none;
  cursor: pointer;
  height: 60px;
  width: 87px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
`
