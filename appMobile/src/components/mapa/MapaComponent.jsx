import React, { useEffect, useState } from 'react'
import {
  PermissionsAndroid,
  Text,
  NativeModules,
  TouchableOpacity,
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { logCoordenadas } from '../../views/LogView'
import MapBox from '../mapBox/MapBox'

const MapaComponent = (props) => {
  const { style = undefined } = props

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
          // console.log(logCoordenadas)
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

  return userPossition.latitude && userPossition.longitude ? (
    <>
      <Text>
        {userPossition.latitude} {userPossition.longitude}
      </Text>
      <TouchableOpacity onPress={() => MapBox.navigateToHome()}>
        <Text>Chamar Módulo Nativo</Text>
      </TouchableOpacity>
    </>
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
