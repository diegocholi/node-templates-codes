import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import RenderCamera from './RenderCamera'
import RenderAnnotations from './RenderAnnotations'
import MapboxGL from '@react-native-mapbox-gl/maps'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZGllZ29jaG9saSIsImEiOiJja2FyY3dxbzUwaXdiMzRuMDRpMHlkNmY1In0.HU7BRHun3uPl2KkLDPWZPA'
)
MapboxGL.setConnected(true)

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
})

const MapaComponent = (props) => {
  const { userPossition } = props
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false)
  }, [])

  return (
    <SafeAreaView>
      <MapboxGL.MapView
        style={styles.container}
        logoEnabled={false}
        attributionEnabled={true}
        // styleURL={MapboxGL.StyleURL.Dark}
      >
        <RenderCamera userPossition={userPossition} />
      </MapboxGL.MapView>
    </SafeAreaView>
  )
}

export default MapaComponent
