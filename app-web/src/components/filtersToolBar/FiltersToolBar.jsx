import React from 'react'
import { Grid } from '@material-ui/core'
import { SearchButton, AddButton } from './styled'

import SearchIcon from '@material-ui/icons/Search'
import Add from '@material-ui/icons/Add'

const FiltersToolBar = (props) => {
  const { rightButton = false, addClick = false, searchClick = false } = props

  return (
    <Grid container spacing={1}>
      <Grid
        container
        item
        alignItems='center'
        style={{
          backgroundColor: '#fff',
          borderRadius: '5px',
        }}
        spacing={1}
        xs={rightButton ? 8 : 12} // extra-pequeno: 0px
        sm={rightButton ? 11 : 12} // pequeno: 600px
        md={rightButton ? 11 : 12} // médio: 960px
        lg={rightButton ? 11 : 12} // grande: 1280px
        xl={rightButton ? 11 : 12} // extra-grande: 1920px
      >
        {/*Se existir somente um campo colocamos na tela se não iteramos os valores*/}
        {props.children.length ? (
          props.children.map((item, key) => (
            <Grid
              item
              xs={12} // extra-pequeno: 0px
              sm={12} // pequeno: 600px
              md // médio: 960px
              lg // grande: 1280px
              xl // extra-grande: 1920px
              key={key}
            >
              {item}
            </Grid>
          ))
        ) : (
          <Grid item xs>
            {props.children}
          </Grid>
        )}
        <Grid
          item
          xs={12} // extra-pequeno: 0px
          sm={12} // pequeno: 600px
          md={2} // médio: 960px
          lg={1} // grande: 1280px
          xl={1} // extra-grande: 1920px
        >
          <SearchButton onClick={searchClick}>
            <SearchIcon />
          </SearchButton>
        </Grid>
      </Grid>
      {!rightButton || (
        <Grid item xs={1}>
          <AddButton onClick={addClick}>
            <Add />
          </AddButton>
        </Grid>
      )}
    </Grid>
  )
}

export default FiltersToolBar
