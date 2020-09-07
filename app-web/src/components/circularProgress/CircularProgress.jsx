import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const CircularProgressUI = () => (
  <CircularProgress
    style={{
      margin: 0,
      top: '50%',
      left: '50%',
      marginRight: '-50%',
    }}
    disableShrink
    color='inherit'
  />
)

export default CircularProgressUI
