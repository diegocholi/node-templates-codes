import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const CircularProgressUI = () => (
  <CircularProgress
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
    }}
    disableShrink
    color='inherit'
  />
)

export default CircularProgressUI
