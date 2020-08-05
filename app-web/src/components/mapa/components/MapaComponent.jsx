import React from 'react'

const styles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute',
}

const MapaComponent = (props) => {
  const { mapContainer = null } = props

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />
}

export default MapaComponent
