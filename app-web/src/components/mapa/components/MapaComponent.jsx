import React from 'react'
import { makeStyles } from '@material-ui/core'

const MapaComponent = (props) => {
  const { mapContainer = null, height, width, position = 'relative' } = props
  const useStyle = makeStyles({
    containerDivMap: {
      width: width,
      height: height,
      position: position,
      marginBottom: '5vh',
      marginTop: '5vh',
    },
  })
  const classes = useStyle()
  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      className={classes.containerDivMap}
    />
  )
}

export default MapaComponent
