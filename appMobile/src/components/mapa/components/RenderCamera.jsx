import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'

const RenderCamera = () => {
  return (
    <>
      <MapboxGL.Camera
        zoomLevel={15}
        followUserLocation
        followUserMode='compass'
      />
      <MapboxGL.UserLocation visible={true} />
    </>
  )
}

export default RenderCamera
