import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'

const RenderCamera = (props) => {
  const { userPossition } = props

  return (
    <>
      <MapboxGL.Camera
        zoomLevel={15}
        followUserLocation
        followUserMode='course'
        centerCoordinate={[
          userPossition.longitude ? userPossition.longitude : 0,
          userPossition.latitude ? userPossition.latitude : 0,
        ]}
      />
      {/* <MapboxGL.UserLocation visible={false} /> */}
    </>
  )
}

export default RenderCamera
