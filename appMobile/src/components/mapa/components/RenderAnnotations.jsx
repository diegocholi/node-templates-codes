import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'

const RenderAnnotations = (props) => {
  const { userPossition } = props

  const styles = StyleSheet.create({
    annotationContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
    },
    annotationFill: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#7159C1',
      transform: [{ scale: 0.8 }],
    },
  })

  return (
    <MapboxGL.PointAnnotation
      id='rocketseat'
      coordinate={[userPossition.longitude, userPossition.latitude]}
    >
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title='Rocketseat House' />
    </MapboxGL.PointAnnotation>
  )
}

export default RenderAnnotations
