import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'

const RenderCamera = () => {
  return (
    <>
      <MapboxGL.Camera
        zoomLevel={15}
        followUserLocation
        followUserMode='course'
      />
      <MapboxGL.UserLocation visible={false} />
    </>
  )
}

export default RenderCamera
