import React from 'react'
// import TextField from '@material-ui/core/TextField'

import { ContainerStyle, Button } from './style'
import SearchIcon from '@material-ui/icons/Search'
const FiltersToolBar = () => {
  return (
    <ContainerStyle>
      <div>
        <Button>
          <SearchIcon />
        </Button>
        {/* <TextField
          id='filled-textarea'
          label='Multiline Placeholder'
          placeholder='Placeholder'
          multiline
          variant='filled'
          fullWidth={true}
          onChange={() => {
            console.log('ok')
          }}
        /> */}
      </div>
    </ContainerStyle>
  )
}

export default FiltersToolBar
