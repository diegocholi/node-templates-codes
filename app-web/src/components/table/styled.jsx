import styled from 'styled-components'
import TableContainerUI from '@material-ui/core/TableContainer'
import PaperUI from '@material-ui/core/Paper'

export const TableContainer = styled(TableContainerUI)`
  max-height: 440px;
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    width: 300px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    width: 250px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    width: 175px;
  }
`

export const Paper = styled(PaperUI)`
  /* PIXEL 2*/
  @media only screen and (max-width: 414px) {
    width: 300px;
  }
  /* MOTO g4*/
  @media only screen and (max-width: 360px) {
    width: 250px;
  }
  /* Galaxy Fold */
  @media only screen and (max-width: 280px) {
    width: 175px;
  }
`
