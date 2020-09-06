import { createGlobalStyle } from 'styled-components'
import colors from './constants/themeColor'

export const GlobalStyled = createGlobalStyle`
    body {
        background-color: ${colors.background};
    }
`
