import { createGlobalStyle } from 'styled-components'
import colors from './themes/consts/themeColor'

export const GlobalStyled = createGlobalStyle`
    body {
        background-color: ${colors.background};
    }
`
