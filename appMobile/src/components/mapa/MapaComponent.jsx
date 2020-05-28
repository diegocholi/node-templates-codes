import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from 'react-native-geolocation-service'
import { logCoordenadas } from '../../views/LogView'

const MapaComponent = (props) => {
  const { style = undefined } = props
  const origin = { latitude: 37.3318456, longitude: -122.0296002 }
  const destination = { latitude: 37.771707, longitude: -122.4053769 }
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDHH7iMuZ2IuXrjmh_T-Xv21Oz7d2hsrh0'

  const [hasLocationPermision, setHasLocationPermision] = useState(false)
  const [userPossition, setUserPossition] = useState({
    latitude: false,
    longitude: false,
  })

  useEffect(() => {
    if (!hasLocationPermision) verifyLocationPermission()

    if (hasLocationPermision) {
      Geolocation.watchPosition(
        (position) => {
          logCoordenadas.push({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          console.log(logCoordenadas)
          setUserPossition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          console.log(error.code, error.message)
        },
        {
          enableHighAccuracy: true, // É um booleano que representa se é necessário usar GPS ou não. Se definido como verdadeiro, uma posição GPS será solicitada. Se definido como falso, um local WIFI será solicitado.
          maximumAge: 0, // 1000 = 1 segundos
          timeout: 1000, // 1000 = 1 segundos
          distanceFilter: 0, // A distância mínima do local anterior a exceder antes de retornar um novo local. Defina como 0 para não filtrar locais. O padrão é 100m.
        }
      )
    }
  }, [hasLocationPermision])

  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida')
        setHasLocationPermision(true)
      } else {
        setHasLocationPermision(false)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const map = () => {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: userPossition.latitude || 0,
          longitude: userPossition.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ ...props, flex: 1 }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        <Marker
          coordinate={{
            latitude: userPossition.latitude || 0,
            longitude: userPossition.longitude || 0,
          }}
          title={'marker.title'}
          description={'marker.description'}
        />
        <Text>
          {userPossition.latitude} {userPossition.longitude}
        </Text>
      </MapView>
    )
  }

  return userPossition.latitude && userPossition.longitude ? (
    map()
  ) : (
    <Text
      style={{
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      Carregando ...
    </Text>
  )
}

export default MapaComponent
